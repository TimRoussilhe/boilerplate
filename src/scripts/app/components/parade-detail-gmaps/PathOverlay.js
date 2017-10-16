import Snap from 'Snap';

import PinSVG from 'components/svg/pin_pride_logo.svg';
import PinShadowSVG from 'components/svg/pin_shadow.svg';
import HotspotVideoSVG from 'components/svg/play_hotspot.svg';
// import HotspotVideoSVG from 'components/svg/hotspot_video.svg';
import HotspotPhotoSVG from 'components/svg/hotspot_photo.svg';
import HotspotAudioSVG from 'components/svg/hotspot_audio.svg';

import Detectizr from 'detectizr';

import $ from 'zepto';

import {RED, GREEN, BLUE, ORANGE, PURPLE, YELLOW} from 'constants/colors';
import {VIDEO_HOTSPOT, PHOTO_HOTSPOT, AUDIO_HOTSPOT} from 'containers/experience/constants';

import {setHotspotId} from 'containers/experience/actions';
import store from 'store';

import SimplifyPath from 'simplify-path';
import {catmullRomFitting} from 'utils/misc';
import {trackEvent} from 'utils/analytics';

export default function createPathOverlay(google) {
    return class PathOverlay extends google.maps.OverlayView {
        constructor(bounds, coordinates, map, data = {}, actions = {}) {
            super();

            this.bounds_ = bounds;
            this.coordinates_ = coordinates;
            this.map_ = map;
            this.data_ = data;
            this.actions = actions;

            // path
            this.pathContainer = null;
            this.snap = null;
            this.polyline = null;
            this.aPolylines = [];
            this.totalLengthPolyline = 0;
            this.LENGTH_POLYLINE = 40;
            this.colors = [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE];

            // pin
            this.pinSvg = null;
            this.backgroundPinInner = null;
            this.backgroundPinOuter = null;
            this.hotspotPinOuter = null;
            this.startTitle = null;

            // overlay
            this.overlayContainer = null;

            this.isShown = false;

            // Hotspots
            this.aHostpots = [];
            // this.showHotspotAnimationDuration = 0.7;
            this.SHOW_HOTSPOT_ANIMATION_DURATION = 0.7;

            this.handlers = {};

            this.setMap(map);
        }

        onAdd() {
            // create path
            this._createPath();

            console.log('this.data_', this.data_);

            // create starting pin
            // here just checking if posseses hotpsot
            // we could also check if featured but this will do the job
            if (!this.data_.hotspots || this.data_.hotspots.length === 0) this._createStartingPin();
            // this._createStartingPin();

            // create hotspots
            this._createHotspots();

            // create overlay
            this._createOverlay();
        }

        draw() {
            // Resize the image's div to fit the indicated dimensions.
            this._position();
        }

        resize() {
            if (this.overlayContainer) {
                // Because can't really fixed position
                const bounds = this.overlayContainerPhantom.getBoundingClientRect();

                // TRANSFORM WORKS
                this.overlayContainer.style.transform = `translate3d(${-bounds.left}px, ${-bounds.top}px, 0)`;
            }

            if (this.isShown) {
                const points = this._getSimplifiedPoints();

                // Trace the polyline
                const polyline = this.snap.polyline(points).attr({
                    fill: 'none',
                    stroke: 'none',
                    strokeWidth: 0
                });

                this._checkHotspotsBounds();

                // Determine length
                const totalLength = this._getMasterPathLength(polyline);

                // Rebuild them!
                if (this.totalLengthPolyline !== totalLength) {
                    this._createPath();
                } else {
                    polyline.remove();
                }
            }
        }

        _position() {
            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            const overlayProjection = this.getProjection();

            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            const sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            const ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // Position path
            if (this.pathContainer) {
                this.pathContainer.style.left = sw.x + 'px';
                this.pathContainer.style.top = ne.y + 'px';
                this.pathContainer.style.width = (ne.x - sw.x) + 'px';
                this.pathContainer.style.height = (sw.y - ne.y) + 'px';
            }

            // position pin
            // get 1st coordinates
            const latLng = new google.maps.LatLng(this.coordinates_.get(1), this.coordinates_.get(0));
            const startPt = overlayProjection.fromLatLngToDivPixel(latLng);

            if (this.pinSvg) this.pinSvg[0].style.left = `${startPt.x}px`;
            if (this.pinSvg) this.pinSvg[0].style.top = `${startPt.y}px`;

            if (this.backgroundPinInner) {
                this.backgroundPinInner.style.left = `${startPt.x}px`;
                this.backgroundPinInner.style.top = `${startPt.y}px`;

                this.backgroundPinOuter.style.left = `${startPt.x}px`;
                this.backgroundPinOuter.style.top = `${startPt.y}px`;
            }

            let currentPct = 0;
            this.aHostpots.forEach((hotspot, i) => {
                const latLngHotspot = new google.maps.LatLng(Number(hotspot.lat), Number(hotspot.long));
                const ptHotspot = overlayProjection.fromLatLngToDivPixel(latLngHotspot);

                hotspot.container.style.left = `${ptHotspot.x}px`;
                hotspot.container.style.top = `${ptHotspot.y}px`;
                hotspot.pt = ptHotspot;

                const prevPt = i === 0 ? startPt : this.aHostpots[i - 1].pt;

                // get actual position on path in terms of %
                // so minimap can use this data + for delay animation
                hotspot.pct = currentPct = this._getPctPtOnPath(currentPct, ptHotspot, prevPt);
                // console.log('pct', hotspot.pct);
            });
        }

        _getPctPtOnPath(currentPct, pt, prevPt) {
            const length = Math.sqrt(Math.pow((pt.x - prevPt.x), 2) + Math.pow((pt.y - prevPt.y), 2));
            return currentPct + (length / this.totalLengthPolyline);
        }

        _createStartingPin() {
            // const overlayProjection = this.getProjection();

            // SVG pin
            this.pinSvg = this.coordinates_.size > 2 ? $(PinSVG) : $(PinShadowSVG);

            // Add the element to the "overlayLayer" pane.
            const panes = this.getPanes();
            panes.overlayMouseTarget.appendChild(this.pinSvg[0]);

            // classes
            this.pinSvg.addClass('start-pin');
            if (this.coordinates_.size <= 2) this.pinSvg.addClass('start-shawdow-pin');

            // background
            if (this.coordinates_.size > 2) {
                this.backgroundPinInner = document.createElement('div');
                this.backgroundPinInner.classList.add('background-pin-inner');
                panes.overlayMouseTarget.appendChild(this.backgroundPinInner);

                this.backgroundPinOuter = document.createElement('div');
                this.backgroundPinOuter.classList.add('background-pin-outer');
                panes.overlayMouseTarget.appendChild(this.backgroundPinOuter);
            }
        }

        _createOverlay() {
            if (!this.data_.overlay || this.coordinates_.size <= 2) return;

            this.overlayContainer = document.createElement('div');
            this.overlayContainer.classList.add('overlay-container');

            // TO GET THE CURRENT OFFSET LEFT/TOP SO I CAN POSITION THE OVERLAY fixed
            this.overlayContainerPhantom = document.createElement('div');
            this.overlayContainerPhantom.classList.add('overlay-container-phantom');

            // overlay
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            this.overlayContainer.appendChild(overlay);

            // text
            const text = document.createElement('p');
            text.classList.add('text');
            text.classList.add('--ff-date');
            text.classList.add('off-abs-all-6');
            text.classList.add('col-all-3');
            text.classList.add('col-lg-5');
            text.classList.add('col-md-5');
            text.classList.add('--c-white');
            text.textContent = this.data_.overlay;
            this.overlayContainer.appendChild(text);

            // Add the main overlay
            const panes = this.getPanes();
            // console.log('panes', panes);
            panes.overlayMouseTarget.appendChild(this.overlayContainer);
            panes.overlayMouseTarget.appendChild(this.overlayContainerPhantom);
            // panes.overlayLayer.appendChild(over);

            // add over js
            if (Detectizr.device.type === 'desktop') {
                this.handlers.onHover = ::this._onHover;
                this.handlers.onOut = ::this._onOut;

                if (this.pinSvg) this.pinSvg[0].addEventListener('mouseenter', this.handlers.onHover, false);
                if (this.pinSvg) this.pinSvg[0].addEventListener('mouseleave', this.handlers.onOut, false);

                if (this.backgroundPinInner) this.backgroundPinInner.addEventListener('mouseenter', this.handlers.onHover, false);
                if (this.backgroundPinInner) this.backgroundPinInner.addEventListener('mouseleave', this.handlers.onOut, false);
            }

            // console.log('this.data_', this.data_);
        }

        _onHover() {
            this.overlayContainer.classList.add('show');
        }

        _onOut() {
            this.overlayContainer.classList.remove('show');
        }

        _createPath() {
            if (this.coordinates_.size <= 2) return;

            const overlayProjection = this.getProjection();

            const sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            const ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            let rebuild = false;
            if (this.pathContainer) {
                this.pathContainer.parentNode.removeChild(this.pathContainer);
                this.pathContainer = null;
                rebuild = true;
            }

            this.pathContainer = document.createElement('div');
            this.pathContainer.classList.add('path-container');
            this.pathContainer.style.borderStyle = 'none';
            this.pathContainer.style.borderWidth = '0';
            this.pathContainer.style.position = 'absolute';

            if (rebuild) {
                this.pathContainer.classList.add('show');
                this.pathContainer.style.left = sw.x + 'px';
                this.pathContainer.style.top = ne.y + 'px';
                this.pathContainer.style.width = (ne.x - sw.x) + 'px';
                this.pathContainer.style.height = (sw.y - ne.y) + 'px';
            }

            // camvas test
            // const canvas = document.createElement('canvas');
            // const ctx = canvas.getContext('2d');
            // const cw = canvas.width = ne.x - sw.x;
            // const ch = canvas.height = sw.y - ne.y;

            // create SVG
            const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

            svgPath.setAttribute('viewBox', `0 0 ${(ne.x - sw.x)} ${(sw.y - ne.y)}`);
            svgPath.setAttribute('width', '100%');
            svgPath.setAttribute('height', '100%');
            svgPath.style.display = 'block';
            svgPath.id = 'svg-map';

            this.snap = Snap(svgPath);

            const points = this._getSimplifiedPoints();

            // Trace the polyline
            this.polyline = this.snap.polyline(points).attr({
                fill: 'none',
                stroke: 'none',
                strokeWidth: 0
            });

            // console.log('path str', this._convertString(pointsStr));
            // console.log('path str', this._convertString(polyline.node.outerHTML));

            // Determine length
            this.totalLengthPolyline = this._getMasterPathLength(this.polyline);

            // Now, build as many polylines as we need.
            const nbPolyline = Math.round(this.totalLengthPolyline / this.LENGTH_POLYLINE);

            if (this.aPolylines.length) {
                this.aPolylines.length = 0;
                this.aPolylines = [];
            }

            for (let i = 0; i < nbPolyline; i++) {
                const lengthP = Math.round(this.totalLengthPolyline - (i / nbPolyline * this.totalLengthPolyline));
                const attr = {
                    fill: 'none',
                    strokeDashoffset: rebuild ? this.totalLengthPolyline - lengthP : this.totalLengthPolyline,
                    stroke: this.colors[i % this.colors.length],
                    strokeAntialiasing: true,
                    strokeLinecap: 'round',
                    strokeWidth: 5
                };
                if (rebuild) attr.strokeDasharray = this.totalLengthPolyline;
                const pol = {
                    el: this.snap.polyline(points).attr(attr),
                    lengthP: this.totalLengthPolyline,
                    offset: this.totalLengthPolyline - lengthP
                };
                pol.el.node.style.zIndex = i;

                this.aPolylines.push(pol);
            }

            // const path = this.snap.path(this._convertString(polyline.node.outerHTML)).attr({
            //     fill: 'none',
            //     stroke: '#F00',
            //     strokeWidth: 5
            // });

            // set current dashOffset
            // this.polyline.attr({strokeDashoffset: this.totalLengthPolyline});

            // Append the SVG path
            this.pathContainer.appendChild(svgPath);
            // this.pathContainer.appendChild(canvas);

            // Add the element to the "overlayLayer" pane.
            const panes = this.getPanes();
            panes.overlayMouseTarget.appendChild(this.pathContainer);
        }

        _getSimplifiedPoints() {
            const overlayProjection = this.getProjection();

            const sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
            const ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

            // polyline
            const points = [];
            const pointsPathSimplify = [];
            // let pointsStr = '';
            let tempPoints = [];
            // console.log('this.coordinates_', this.coordinates_.toJS());
            this.coordinates_.entrySeq().forEach(([idx, value]) => {
                tempPoints.push(value);

                if (idx % 2) {
                    const p = overlayProjection.fromLatLngToDivPixel(new google.maps.LatLng(tempPoints[1], tempPoints[0]));
                    // console.log('p', p.x - sw.x, p.y - ne.y);
                    // offset the current x and y origin;
                    const x = Math.round(p.x - sw.x); // .toFixed(2);
                    const y = Math.round(p.y - ne.y); // .toFixed(2);
                    // points.push(x);
                    // points.push(y);
                    pointsPathSimplify.push([x, y]);

                    // pointsStr += `${p.x - sw.x}, ${p.y - ne.y} `;
                    // reset
                    tempPoints = [];
                    tempPoints.length = 0;
                }
            });

            const tolerance = 5;
            const simplifiedPath = SimplifyPath(pointsPathSimplify, tolerance);
            const pointsPathCanvas = [];

            simplifiedPath.forEach((point, i) => {
                points.push(point[0]);
                points.push(point[1]);
                pointsPathCanvas.push({x: point[0], y: point[1]});
            });

            return points;
        }

        _getMasterPathLength(polyline) {
            // Determine length
            let totalLength = 0;
            let prevPos;
            const polylineEl = polyline.node;

            for (let i = 0; i < polylineEl.points.numberOfItems; i++) {
                const pos = polylineEl.points.getItem(i);
                if (i > 0) {
                    totalLength += Math.sqrt(Math.pow((pos.x - prevPos.x), 2) + Math.pow((pos.y - prevPos.y), 2));
                }
                prevPos = pos;
            }

            return parseInt(totalLength, 10);
        }

        _drawPolyline(ctx, pts) {
            // From http://stackoverflow.com/a/7058606
            // move to the first point
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            let i = 0;
            for (;i < pts.length - 2; i++) {
                const xc = (pts[i].x + pts[i + 1].x) / 2;
                const yc = (pts[i].y + pts[i + 1].y) / 2;
                if (xc <= 15 || yc <= 15) ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
                else ctx.lineTo(pts[i].x, pts[i].y);
            }

            // curve through the last two points
            ctx.quadraticCurveTo(pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y);
            ctx.stroke();
            // console.log('pts', pts);
            // ctx.beginPath();
            // ctx.moveTo(pts[0].x, pts[0].y);
            // for (let i = 1; i < pts.length; i++) {
            //     ctx.lineTo(pts[i].x, pts[i].y);
            // }
            // ctx.stroke();
        }

        _convertString(string) {
            const converted = string
                // close path for polygon
                .replace(/(<polygon[\w\W]+?)points=(["'])([.\d, ]+?)(["'])/g, '$1d=$2M$3z$4')
                // dont close path for polyline
                .replace(/(<polyline[\w\W]+?)points=(["'])([.\d, ]+?)(["'])/g, '$1d=$2M$3$4')
                .replace(/poly(gon|line)/g, 'path');
            return converted;
        }

        _createHotspots() {
            if (this.coordinates_.size <= 2 || !this.data_.hotspots || !this.data_.hotspots.length) return;

            this.data_.hotspots.forEach((hotspot_, i) => {
                // object
                const hotspot = Object.assign({}, hotspot_);

                // create container
                hotspot.container = document.createElement('div');
                hotspot.container.classList.add('hotspot-icon');

                const title = document.createElement('div');
                title.innerHTML = hotspot_.title;
                title.classList.add('title-card');
                title.classList.add('--f-medium13');
                hotspot.container.appendChild(title);

                // thumbnail
                console.log('hotspot ------', hotspot);

                if (hotspot_.thumbnail) {
                    const thumbnail = document.createElement('div');
                    const thumbnailSrc = hotspot_.thumbnail.bg.lg.src;
                    thumbnail.style.backgroundImage = 'url(' + thumbnailSrc + '=w96-h96)';
                    thumbnail.classList.add('thumbnail-card');
                    hotspot.container.appendChild(thumbnail);
                }

                // if (hotspot.type === VIDEO_HOTSPOT) {
                // hotspot.container.classList.add('hotspot-video-icon');
                // hotspot.container.appendChild($(HotspotVideoSVG)[0]);
                // }

                // if (hotspot.type === PHOTO_HOTSPOT) {
                //     hotspot.container.classList.add('hotspot-photo-icon');
                //     hotspot.container.appendChild($(HotspotPhotoSVG)[0]);
                // }

                // if (hotspot.type === AUDIO_HOTSPOT) {
                //     hotspot.container.classList.add('hotspot-audio-icon');
                //     hotspot.container.appendChild($(HotspotAudioSVG)[0]);
                // }

                // add click
                hotspot.onClick = () => {
                    trackEvent({category: 'maps', action: 'click', label: `hotspot ${hotspot.title}`});
                    // store.dispatch(setHotspotId(hotspot.id));
                    this.actions.setHotspotId(hotspot.id);
                };
                hotspot.container.addEventListener('click', hotspot.onClick);

                if (i === 0) {
                    // circle
                    this.hotspotPinOuter = document.createElement('div');
                    this.hotspotPinOuter.classList.add('background-pin-outer');
                    this.hotspotPinOuter.classList.add('hotspot-outer');
                    hotspot.container.appendChild(this.hotspotPinOuter);

                    // title card
                    const startTitle = document.createElement('div');
                    startTitle.innerHTML = 'Start here';
                    startTitle.classList.add('start-card');
                    startTitle.classList.add('--f-medium13');
                    hotspot.container.appendChild(startTitle);
                    this.startTitle = startTitle;

                    // z-index
                    hotspot.container.classList.add('hotspot-start');
                }

                 // Add the element to the "overlayLayer" pane.
                const panes = this.getPanes();
                panes.overlayMouseTarget.appendChild(hotspot.container);
                this.aHostpots.push(hotspot);
            });

            // has experiene
            const firstHotspot = this.aHostpots[0];
            if (this.pinSvg) this.pinSvg[0].addEventListener('click', firstHotspot.onClick);
            if (this.backgroundPinInner) this.backgroundPinInner.addEventListener('click', firstHotspot.onClick);
        }

        _checkHotspotsBounds() {
            const browserWidth = store.getState().get('browser').width;

            // Default value = more than desktop
            const borderLeft = 0.1;
            let limitLeft = (0.4069444 + borderLeft) * browserWidth;
            // if (this.getState().get('lessThan').get('desktop') === false) limitLeft = 0.4069444 * browserWidth;
            if (store.getState().get('browser').lessThan.desktop === true) limitLeft = (0.4941406 + borderLeft) * browserWidth;
            console.log('limitLeft', limitLeft);

            // no resize for mobile
            if (store.getState().get('browser').lessThan.tabletH === false) {
                // check if title fits in window
                for (let index = 0; index < this.aHostpots.length; index++) {
                    const element = this.aHostpots[index];
                    element.container.classList.remove('right');
                    const title = element.container.querySelector('.title-card');
                    console.log('title.getBoundingClientRect().left', title.getBoundingClientRect().left);
                    if (title.getBoundingClientRect().left < limitLeft) {
                        element.container.classList.add('right');
                    }
                }
            }
        }

        show() {
            if (this.pathContainer) {
                this.aPolylines.forEach((poly) => {
                    poly.el.attr({strokeDasharray: poly.lengthP, strokeDashoffset: poly.offset});
                });
                this.pathContainer.classList.add('show');
            }
            if (this.pinSvg) this.pinSvg.addClass('show');
            if (this.backgroundPinInner) this.backgroundPinInner.classList.add('show');
            if (this.backgroundPinOuter) this.backgroundPinOuter.classList.add('show');

            if (this.hotspotPinOuter) {
                this.hotspotPinOuter.classList.add('show');
                // fade away
                setTimeout(() => {
                    this.startTitle.classList.add('hide');
                }, 4500);
            }

            this.aHostpots.forEach((hotspot, i) => {
                hotspot.container.style.transitionDelay = Number(this.SHOW_HOTSPOT_ANIMATION_DURATION * hotspot.pct).toFixed(2) + 's';
                hotspot.container.classList.add('show');
            });

            setTimeout(() => {
                this.isShown = true;
                // if (this.aHostpots.length > 0) this._checkHotspotsBounds();
            }, 300);

             setTimeout(() => {
                if (this.aHostpots.length > 0) this._checkHotspotsBounds();
            }, 800);
        }

        hide() {
            return new Promise((resolve, reject) => {
                if (this.pathContainer) {
                    this.aPolylines.forEach((poly) => {
                        poly.el.attr({strokeDasharray: poly.lengthP, strokeDashoffset: -poly.lengthP});
                    });
                    this.pathContainer.classList.remove('show');
                }
                if (this.pinSvg) this.pinSvg.removeClass('show');
                if (this.backgroundPinInner) this.backgroundPinInner.classList.remove('show');
                if (this.backgroundPinOuter) this.backgroundPinOuter.classList.remove('show');
                if (this.hotspotPinOuter) this.hotspotPinOuter.classList.remove('show');

                this.aHostpots.forEach((hotspot, i) => {
                    hotspot.container.style.transitionDelay = 0;
                    hotspot.container.classList.remove('show');
                });

                // dirty
                setTimeout(() => {
                    resolve();
                }, 500);
            });
        }

        onRemove() {
            if (this.overlayContainer) {
                if (Detectizr.device.type === 'desktop') {
                    if (this.pinSvg) this.pinSvg[0].removeEventListener('mouseenter', this.handlers.onHover, false);
                    if (this.pinSvg) this.pinSvg[0].removeEventListener('mouseleave', this.handlers.onOut, false);

                    if (this.backgroundPinInner) this.backgroundPinInner.removeEventListener('mouseenter', this.handlers.onHover, false);
                    if (this.backgroundPinInner) this.backgroundPinInner.removeEventListener('mouseleave', this.handlers.onOut, false);

                    if (this.aHostpots.length) {
                        const firstHotspot = this.aHostpots[0];
                        if (this.pinSvg) this.pinSvg[0].removeEventListener('click', firstHotspot.onClick);
                        if (this.backgroundPinInner) this.backgroundPinInner.removeEventListener('click', firstHotspot.onClick);
                    }

                    this.handlers = null;
                }

                this.overlayContainer.parentNode.removeChild(this.overlayContainer);
                this.overlayContainerPhantom.parentNode.removeChild(this.overlayContainerPhantom);

                this.overlayContainer = null;
                this.overlayContainerPhantom = null;
            }

            if (this.pathContainer) this.pathContainer.parentNode.removeChild(this.pathContainer);
            this.pathContainer = null;

            if (this.backgroundPinInner) this.backgroundPinInner.parentNode.removeChild(this.backgroundPinInner);
            this.backgroundPinInner = null;

            if (this.backgroundPinOuter) this.backgroundPinOuter.parentNode.removeChild(this.backgroundPinOuter);
            this.backgroundPinOuter = null;

            if (this.hotspotPinOuter) this.hotspotPinOuter.parentNode.removeChild(this.hotspotPinOuter);
            this.hotspotPinOuter = null;

            if (this.pinSvg) {
                this.pinSvg.remove();
                this.pinSvg = null;
            }

            this.aHostpots.forEach((hotspot, i) => {
                hotspot.container.removeEventListener('click', hotspot.onClick);
                hotspot.container.parentNode.removeChild(hotspot.container);
                hotspot = null;
            });

            this.aHostpots.length = 0;
            this.aHostpots = [];
        }

        dispose() {
            if (this.snap) this.snap.remove();
            this.snap = null;
            this.setMap(null);
            this.bounds_ = null;
            this.coordinates_ = null;
        }
    };
}

// export default createPathOverlay;
