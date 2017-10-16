/* global google*/

import $ from 'zepto';

import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './parade-detail-gmaps.twig';

import createPathOverlay from './PathOverlay';

import {PARADE_DETAIL, PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';
import STYLES from 'constants/map.json';

import {trackEvent} from 'utils/analytics';

import {getRoute} from 'containers/app/selectors';

// import googleStaticMapsTile from 'google-static-maps-tile';

import {GMAPS_KEY} from 'constants/api';

class ParadeDetailGmaps extends AbstractDOMComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.watchers = {
            'gmaps.isGettingScript': ::this._loadScript,
            'gmaps.isInitializing': ::this._initMap,
            'gmaps.isInitializingPosition': ::this._initPosition,
            'gmaps.isShown': ::this._toggleDisplayMap,
            'gmaps.data': ::this._dispose,
            'cities.current': ::this._updateCurrentCity
        };

        this.events = {
            'click .open-in-gmaps': ::this._openInGmaps
        };

        this.map = null;
        this.overlay = null;
        this.bounds = null;
        this.coordCenterPath = null;
        this.center = null;

        // store because of watcher triggering to many times data.coordinates
        this.coordinates = null;

        // todo: store the width somewhere
        this.SIDEBAR_WIDTH = 87;

        this.states = {
            hasShownOnce: false
        };

        // Setup callback
        window.GMAPS_CB = ::this._gMapsCB;
    }

    initDOM() {
        this.$els.parent = $('#parade-detail-google-maps-container');
        this.$els.openInGmaps = this.$el.find('.open-in-gmaps');
        this.$els.mapContainerBuffer = this.$el.find('.map-container-buffer');
    }

    onDOMInit() {
        // append
        this.$els.parent.append(this.el);
        super.onDOMInit();
    }

    onResize(browser) {
        if (!this.map) return;

        console.log('onResize:: this.states.hasShownOnce', this.states.hasShownOnce, this.getState().get('gmaps').get('isShown'));
        if (!this.states.hasShownOnce || this.getState().get('gmaps').get('isShown')) {
            // console.log('resize to center');
            this._resizeMap();
            // map.setCenter(this.center);
        }

        if (this.overlay) {
            setTimeout(() => {
                this.overlay.resize();
            }, 300);
        }

        // if (!browser) browser = this.getState().get('browser');

        // // resize the first time, then pan and allow resize on Shown
        // if (!this.getState().get('gmaps').get('isShown')) return;

        // // set the enter of the map offset from the center of the bound box
        // // offset so it position on 2/3 of the viewport
        // // on < tablet, no sidebar so we center it.
        // const offsetX = browser.lessThan.tabletH ? 0 : ((browser.width - this.SIDEBAR_WIDTH) * 2.25 / 3) - (browser.width / 2);
        // this.center = this._offsetCenter(offsetX, 0);

        // this.map.setCenter(this.center);
    }

    _resizeMap(map = this.map) {
        const browser = this.getState().get('browser');

        // force zoom if no path

        // the map has to fit!
        // console.log('is this.map ?', map === this.map);
        // this.map.fitBounds(this.bounds);
        this.mapBuffer.fitBounds(this.bounds); // also mapBuffer to get right zoom

        // then we offset
        // const offsetX = browser.lessThan.tabletH ? 0 : ((browser.width - this.SIDEBAR_WIDTH) * 2.25 / 3) - (browser.width / 2);
        const offsetX = this.$els.mapContainerBuffer[0].getBoundingClientRect().left / 2;
        this.center = this._offsetCenter(this.map, offsetX, 0);

        // the first time or after the current map has paned
        // if (!this.states.hasShownOnce || this.getState().get('gmaps').get('isShown')) {
            // console.log('resize to center');
        // map.setCenter(this.center);
        // map.setCenter(this.center);

        this.map.setCenter(this.center);
        // if (this.coordinates.size > 2) {
        // }

        if (this.coordinates.size <= 2) {
            this.map.setZoom(16);
        } else {
            this.map.setZoom(this.mapBuffer.getZoom());
        }
    }

    _offsetCenter(map, offsetx, offsety) {
        // latlng is the apparent centre-point
        // offsetx is the distance you want that point to move to the right, in pixels
        // offsety is the distance you want that point to move upwards, in pixels
        // offset can be negative
        // offsetx and offsety are both optional

        const latlng = this.coordCenterPath;

        const scale = Math.pow(2, map.getZoom());

        const worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);
        const pixelOffset = new google.maps.Point((offsetx / scale) || 0, (offsety / scale) || 0);

        const worldCoordinateNewCenter = new google.maps.Point(
            worldCoordinateCenter.x - pixelOffset.x,
            worldCoordinateCenter.y + pixelOffset.y
        );

        return map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);
    }

    _loadScript(isGettingScript) {
        if (!isGettingScript || this.getState().get('gmaps').get('hasScript')) {
            // remove watcher
            this.watchers['gmaps.isGettingScript'] = null;
            delete this.watchers['gmaps.isGettingScript'];
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&callback=GMAPS_CB`;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    // CB script
    _gMapsCB() {
        // create custom overlay here
        // it extends google.maps.OverlayView so we need the lib before creating the class
        this.PathOverlay = createPathOverlay(google);

        this.actions.hasScriptGmaps();
    }

    _initMap(isInitializing) {
        // Already init
        if (!isInitializing || this.getState().get('gmaps').get('isInit')) {
            return;
        }

        if (!this.map) {
            this.map = new google.maps.Map(this.el.querySelector('.map-container'), {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                draggable: false,
                scrollwheel: false,
                clickableIcons: false,
                fullscreenControl: false,
                panControl: false,
                rotateControl: false,
                scaleControl: false,
                keyboardShortcuts: false,
                disableDefaultUI: true,
                disableDoubleClickZoom: true,
                gestureHandling: 'none',
                zoom: 14,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: false,
                styles: STYLES
            });
        }

        this.actions.isInitGmaps();
    }

    _initPosition(isInitializingPosition) {
        const coordinates = this.getState().get('gmaps').get('data').get('coordinates');

        if (!isInitializingPosition || this.getState().get('gmaps').get('isShown') || (this.coordinates && this.coordinates.get(0) === coordinates[0])) {
            return;
        }

        // Load tiles
        this.coordinates = coordinates;

        this.bounds = new google.maps.LatLngBounds();
        let tempCoord = [];

        this.coordinates.entrySeq().forEach(([idx, value]) => {
            tempCoord.push(value);

            if (idx % 2) {
                this.bounds.extend(new google.maps.LatLng(tempCoord[1], tempCoord[0]));
                // reset
                tempCoord = [];
                tempCoord.length = 0;
            }
        });

        // change url open in gmaps
        this._updateUrlGmaps();

        if (this.overlay) {
            // hide first!
            this.overlay.hide().then(() => {
                this.overlay.dispose();
                this._initOverlay();
            });
        } else {
            this._initOverlay();
        }
    }


    _updateUrlGmaps() {
        const coordinates = this.getState().get('gmaps').get('data').get('coordinates');
        const hasPast = this.getState().get('gmaps').get('data').get('hasPast');
        // const href = `https://www.google.com/maps/place/${coordinates.get(1)},${coordinates.get(0)}`;
        const href = `https://maps.google.com?daddr=${coordinates.get(1)},${coordinates.get(0)}`;
        this.$els.openInGmaps.attr('href', href);
        !hasPast ? this.$els.openInGmaps.addClass('show') : this.$els.openInGmaps.removeClass('show');
    }

    _updateCurrentCity(event) {
        const current = this.getState().get('cities').get('current');
        const cities = this.getState().get('cities').get('list');
        this.$el.removeClass(cities.join(' '));
        this.$el.addClass(current);
    }

    _initOverlay() {
        const data = this.getState().get('gmaps').get('data').toJS();

        // create a map buffer to preload and cache the images
        this.mapBuffer = new google.maps.Map(this.el.querySelector('.map-container-buffer'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: false,
            scrollwheel: false,
            zoom: 14,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: false,
            styles: STYLES
        });

        // First time, we make sure the tiles are properly loaded
        google.maps.event.addListenerOnce(this.mapBuffer, 'tilesloaded', () => {
            this.coordCenterPath = this.mapBuffer.getCenter();
            this.$el.find('.map-container-buffer').addClass('init');

            this._resizeMap();

            google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
                this.overlay = new this.PathOverlay(this.bounds, this.coordinates, this.map, data, {setHotspotId: ::this._setHotspotId});

                this._resizeMap();

                // finally, is init
                setTimeout(() => {
                    this.actions.isInitPositionGmaps();
                }, 400);
            });
            // Center now to trigger the overlay onAdd
            // if (!this.states.hasShownOnce)
        });

        // centers and zoom according to the bounds
        // this._resizeMap();
        this.mapBuffer.fitBounds(this.bounds);
    }

    _setHotspotId(id) {
        this.navigate(getRoute(PARADE_EXPERIENCE_HOTSPOT, {id_hotspot: id}).url);
    }

    _toggleDisplayMap(isShown) {
        if (!this.getState().get('gmaps').get('isInit')) {
            return;
        }

        if (isShown) {
            // show now
            this.$els.parent.addClass('show');
            this.overlay.show();

            this.map.setCenter(this.center);

            if (this.overlay) {
                this.overlay.resize();
            }

            this.setState({hasShownOnce: true});
        } else if (this.getState().get('app').get('location') !== PARADE_DETAIL) {
            this.$els.parent.removeClass('show');
            // console.log('hiiide');
            // this.overlay.hide();
            // this.overlay.dispose();
            // dispose!
            // this.map = null;
            // this.bounds = null;
            // this.coordCenterPath = null;

            // this.overlay.dispose();
            // this.overlay = null;

            // this.$el.find('.map-container').empty();

            // this.$els.parent.removeClass('show');
            // this.actions.resetGmaps();
        }
    }

    _openInGmaps() {
        const data = this.getState().get('gmaps').get('data').toJS();
        trackEvent({category: 'maps', action: 'click', label: `open-in-gmaps ${data.id}`});
    }

    _dispose(data) {
        if (data === null) {
            this.setState({hasShownOnce: false});

            // dispose
            this.map = null;
            this.bounds = null;
            this.coordCenterPath = null;
            this.center = null;

            this.overlay.dispose();
            this.overlay = null;

            this.$el.find('.map-container').empty();
            this.$el.find('.map-container-buffer').empty();

            this.$els.parent.removeClass('show');
            this.actions.resetGmaps();
        }
    }

}

export default ParadeDetailGmaps;
