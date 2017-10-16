import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './minimap.twig';
import {TweenLite, Expo, Cubic} from 'gsap';

import $ from 'zepto';
import Snap from 'snapsvg';
import Modernizr from 'Modernizr';
import Detectizr from 'detectizr';

import {HOMEPAGE, PARADE_DETAIL, PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';
import {getRoute} from 'containers/app/selectors';
import {isFeatured} from 'selectors/cities';
import {setCurrentCity} from 'actions/cities';
import {setHotspotId} from 'containers/experience/actions';
import {getHotspotData, getFirstHotspotData} from 'containers/experience/selectors';

import {VIDEO_HOTSPOT, PHOTO_HOTSPOT, AUDIO_HOTSPOT} from 'containers/experience/constants';

import {getHotspotsByCity} from 'containers/mini-map/selectors';

import {trackEvent} from 'utils/analytics';
import Dot from 'components/svg/hotspotdot.svg';

class MiniMap extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        this.watchers = {
            'cities.current': ::this._handleCityChange,
            'sidebar.hoverCity': ::this._toggleHover,
            'minimap.zoomedCity': ::this._handleZoom,
            'minimap.hotspotsShown': ::this._showHotspots,
            'experience.hotspot_id': ::this._setActiveHotspot
        };

        this.states = {
            zoomedCity: null,
            hospotsShown: false
        };

        this.events = {
            'click .route-segment': ::this._clickRouteSegment,
            'click .page-ctrl': ::this._clickPageCtrl,
            'click .ctrl-label': ::this._clickPageCtrl,
            'click .mini-hotspot': ::this._clickHotspot,
            'mouseenter .mini-hotspot': ::this._toggleHotspot,
            'mouseleave .mini-hotspot': ::this._toggleHotspot,
            'mouseenter .ctrl-label': ::this._segmentHover,
            'mouseleave .ctrl-label': ::this._segmentMouseLeave
        };

        this.path = {
            master: 'M1.4,1l14.4,20.5v22.4L3.4,81.8l0.1,79.4v-0.3v16.3h5l0.2,27.5h5.6v35.9v-0.1v82.9l11.3,0.1V354l11,10.7l-10.4,21v16.9v-0.9v63.7l-11.3,18.8v79.4V566v38.1h8.8V648h-7.1',
            position: 0,
            container: null,
            masterRoute: null,
            indicator: null,
            cityRoutes: {
                'corpus-christi': 'M1.4,0.5l14.5,84.8v92.2L3.4,339.8',
                'birmingham': 'M3.5,0V340',
                'hilo': 'M14.8,0v149.9h8.8v188.6h-7.1',
                'los-angeles': 'M3.5,0v60.1h5l0.2,114.5h5.5V340',
                'providence': 'M14.8,0v338h12.8',
                'wichita': 'M14.8,0v118.9l11,43.6L14.8,263.3v76.4',
                'new-york-city': 'M26.1,0v261.2L14.6,340',
                'san-francisco': 'M14.8,0V340'
            }
        };
    }

    initDOM() {
        this.$els.routes = this.$el.find('.route-segment');
        this.$els.nextLabel = this.$el.find('.next-label');
        this.$els.prevLabel = this.$el.find('.prev-label');
        this.$els.pointer = this.$el.find('.pointer');
        this.$els.masterPath = this.$el.find('#master-path');
    }

    onDOMInit() {
        document.getElementById('minimap-container').appendChild(this.el);

        // check for vector effect support
        if (!Modernizr.testProp('vectorEffect')) {
            this.el.classList.add('no-vector-effect');
        }

        super.onDOMInit();
    }

    onInit() {
        // Store the reference of the cities now
        const cities = this.getState().get('cities').get('list');

        cities.forEach((city) => {
            this.$els[city] = this.$el.find('.' + city);
            const hotspots = getHotspotsByCity(city).toJS();

            // draw them all. now
            this._drawHotspots(hotspots, this.$els[city], city);
        });

        this._drawMasterPath();
        this._resetMap();

        setTimeout(() => {
            super.onInit();
        }, 0);
    }

    // render() {
    //     this._drawMasterPath();
    //     this._resetMap();
    // }

    _drawMasterPath() {
        // draw motion track and blue dot indicator
        this.path.container = Snap('#master-path');
        this.path.masterRoute = this.path.container.path(this.path.master);
        // this.path.indicator = this.path.container.circle(8, 9, 4);
        // this.path.indicator.attr({
        //     fill: '#4284f3',
        //     stroke: 'rgba(159, 198, 216, .36)',
        //     strokeWidth: 6
        // });
    }

    _clickRouteSegment(e) {
        const location = this.getState().get('app').get('location');
        if (location !== HOMEPAGE) return;

        const city = e.currentTarget.dataset.city;
        this.navigate(getRoute(PARADE_DETAIL, {id: city}).url);
    }

    _clickPageCtrl(e) {
        const $target = $(e.currentTarget);
        const city = $target.hasClass('ctrl-label') ? this._getCityFromCtrlLabel(e.currentTarget) : e.currentTarget.dataset.city;
        const inExperience = this.getState().get('experience').get('hotspot_id');

        if ($target.hasClass('prev-label')) {
            trackEvent({category: 'minimap', action: 'click', label: `previous-city ${city}`});
        }

        if ($target.hasClass('next-label')) {
            trackEvent({category: 'minimap', action: 'click', label: `next-city ${city}`});
        }

        if (inExperience) {
            const nextHotspotData = getFirstHotspotData(city);

            if (nextHotspotData) this.navigate(getRoute(PARADE_EXPERIENCE_HOTSPOT, {id_hotspot: nextHotspotData.id}).url);
            else this.navigate(getRoute(PARADE_DETAIL, {id: city}).url);
        } else {
            this.navigate(getRoute(PARADE_DETAIL, {id: city}).url);
        }
    }

    _clickHotspot(e) {
        const id = e.currentTarget.dataset.hotspotId;
        const hotspotData = getHotspotData(id);
        trackEvent({category: 'minimap', action: 'click', label: `hotspot ${hotspotData.title}`});

        this.navigate(getRoute(PARADE_EXPERIENCE_HOTSPOT, {id_hotspot: hotspotData.id}).url);
        // this.dispatch(setHotspotId(id));
    }

    _getCityFromCtrlLabel(el) {
        const cityEl = $(el).hasClass('next-label') ? $('.page-ctrl.next')[0] : $('.page-ctrl.prev')[0];
        return cityEl.dataset.city;
    }

    _segmentHover(e) {
        // if ($(e.currentTarget).hasClass('page-ctrl')) return;
        if (this.getState().get('app').get('location') === HOMEPAGE) return;
        const city = $(e.currentTarget).hasClass('ctrl-label') ? this._getCityFromCtrlLabel(e.currentTarget) : e.currentTarget.dataset.city;
        this.actions.hoverCity(city);
    }

    _segmentMouseLeave() {
        this.actions.hoverCity(null);
    }

    _toggleHover(city, prevCity) {
        if (prevCity) this.$els[prevCity].removeClass('hover');
        if (city) this.$els[city].addClass('hover');
    }

    // _clearHover() {
    //     this.$els.routes.forEach((route) => {
    //         route.classList.remove('hover');
    //     });
    // }

    _handleZoom(zoomedCity) {
        // console.log('_handleZoom', zoomedCity);
        zoomedCity ? this._zoomInSegment() : this._resetMap();
    }

    _handleCityChange(city) {
        if (this.getState().get('app').get('location') === HOMEPAGE && this.getState().get('cities').get('current') && this.getState().get('browser').lessThan.tabletH === false) {
            // this.path.indicator.addClass('active');
            this.$els.pointer.addClass('active');
            this._focusRoute();
        // hide the blue dot when no city is selected
        } else if (this.$els.pointer) {
            // this.path.indicator.removeClass('active');
            this.$els.pointer.removeClass('active');

            const inExperience = this.getState().get('minimap').get('hotspotsShown');
            if (inExperience && city) {
                this.actions.hideHotspots();
            }
        }
    }

    _focusRoute() {
        const newPosition = this._getSegmentPosition();

        Snap.animate(this.path.position, newPosition.y, (value) => {
            const movePoint = this.path.masterRoute.getPointAtLength(value);
            // this.path.indicator.attr({cx: movePoint.x, cy: movePoint.y});
            TweenLite.to(this.$els.pointer, 0.1, {x: movePoint.x, y: movePoint.y * this.ratioY});
        }, 750, () => {
            this.path.position = newPosition.y;
        });
    }

    _getSegmentPosition(city = this.getState().get('cities').get('current')) {
        const positions = {
            'corpus-christi': 0,
            'birmingham': 93,
            'los-angeles': 175,
            'providence': 278,
            'wichita': 378,
            'new-york-city': 481,
            'san-francisco': 569,
            'hilo': 660
        };
        const cityTarget = positions[city] || 0;

        return Snap.path.getPointAtLength(this.path.masterRoute, cityTarget);
    }

    _zoomInSegment() {
        // const city = this.getState().get('app').get('prms').get('id');
        const city = this.getState().get('cities').get('current');
        // console.log('_zoomInSegment:city', city);
        // const hotspots = this.getState().get('gmaps').get('data').get('hotspots') ? this.getState().get('gmaps').get('data').get('hotspots').toJS() : null;
        // console.log('hotspots', hotspots);

        // clear map styling
        this._resetMap();

        // zoom all out first
        this._shrinkRoutes();

        // stop here if not on a featured page
        if (!isFeatured(city)) return;

        // const hotspots = getHotspotsByCity(city).toJS();

        // mark it as zoomed
        this.el.classList.add('zoomed-in');

        // hide next/back when at first or last
        this._isFirstCity() ? this.$els.prevLabel.addClass('hidden') : this.$els.prevLabel.removeClass('hidden');
        this._isLastCity() ? this.$els.nextLabel.addClass('hidden') : this.$els.nextLabel.removeClass('hidden');

        // const cityClassName = String('.' + city);
        const $segment = this.$els[city];
        const $next = $segment.next('.route-segment');
        const $prev = $segment.prev('.route-segment');

        // draw hotspots
        // if (hotspots) this._drawHotspots(hotspots, $segment);

        // add active class to clicked el
        $segment.addClass('zoomed');
        $segment.removeClass('inactive');

        // siblings become next/back ctrls
        if ($next[0] !== undefined && isFeatured(city)) {
            $($next).removeClass('inactive');
            $($next).addClass('page-ctrl next');
        }
        if ($prev[0] !== undefined && isFeatured(city)) {
            $prev.removeClass('inactive');
            $prev.addClass('page-ctrl prev');
        }

        const inExperience = this.getState().get('experience').get('hotspot_id');

        if (inExperience) {
            this.actions.showHotspots();
        }

        // DEBUG for testing hotspot positioning. showHotspots action can fire from experience component (or anywhere) -MikeB
        // this.actions.showHotspots();
        // this._showHotspots(true);
    }

    _isFirstCity() {
        const currentCity = this.getState().get('cities').get('current');
        const listCities = this.getState().get('cities').get('list').toJS();
        const idx = listCities.indexOf(currentCity);
        return idx === 0;
    }

    _isLastCity() {
        const currentCity = this.getState().get('cities').get('current');
        const listCities = this.getState().get('cities').get('list').toJS();
        const idx = listCities.indexOf(currentCity);
        return idx === listCities.length - 1;
    }

    _slugifyHotspot(spot) {
        const audioMod = spot.type === AUDIO_HOTSPOT ? '-audio' : '';
        return spot.type.toLowerCase().split(' ').join('-').split('+').join('') + audioMod;
    }

    _drawHotspots(hotspots, $segment, city) {
        // only draw them once
        if ($segment[0].dataset.hotspots) return;

        // draw path for hotspot positioning
        // const city = $segment[0].dataset.city;
        const container = Snap('#hotspot-path-' + String(city));
        const route = container.path(this.path.cityRoutes[city]);
        const routeLength = route.getTotalLength();
        const segmentLength = routeLength / hotspots.length;

        // container.node.setAttribute('preserveAspectRatio', 'xMidYMid meet');

        hotspots.forEach((spot, i) => {
            // paint each hotspot
            const slug = this._slugifyHotspot(spot);
            // const hotspotEl = container.circle(8, 8, 4);
            const hotspotPos = Snap.path.getPointAtLength(route, Number((i * segmentLength) + (segmentLength / 2)));
            // console.log('hotspot - ', city, spot.id, spot.title, Number((i * segmentLength) + (segmentLength / 2)), route);
            const tipContainerEl = document.createElement('div');
            const tipEl = document.createElement('div');
            const tipSpan = document.createElement('span');

            // hotspotEl.attr({
            //     'data-hotspot-id': spot.id,
            //     'cx': hotspotPos.x,
            //     'cy': hotspotPos.y
            // });
            // hotspotEl.addClass('mini-hotspot ' + String(slug));

            tipEl.classList.add(spot.id);
            tipEl.classList.add(slug);
            tipEl.classList.add('tip');
            tipEl.classList.add('mini-tip');
            tipEl.classList.add('--f-medium13');
            tipSpan.textContent = spot.title;
            tipEl.appendChild(tipSpan);
            tipContainerEl.classList.add('mini-tip-container');
            tipContainerEl.classList.add('mini-hotspot');
            tipContainerEl.classList.add(String(slug));
            tipContainerEl.setAttribute('data-hotspot-id', spot.id);

            tipContainerEl.appendChild(tipEl);

            // DOM SVG
            const svg = $(Dot);
            svg.addClass('dot');
            tipContainerEl.appendChild(svg[0]);
            TweenLite.to(svg, 0.1, {x: hotspotPos.x});

            $segment.find('#mini-tooltip-container').append(tipContainerEl);

            // keep references
            // const targetToolTipClass = String('.' + spot.id);
            this.$els['label-hotspot-' + spot.id] = $('.' + spot.id);
            this.$els['mini-hotspot-' + spot.id] = $('.mini-hotspot[data-hotspot-id="' + spot.id + '"]');
        });
        // mark it done
        $segment[0].dataset.hotspots = true;
    }

    _showHotspots(hotspotsShown) {
        // const $routeSegmentEl = $('.route-segment.zoomed');
        const city = this.getState().get('cities').get('current');

        const $routeSegmentElCity = $('.route-segment[data-city=' + city + ']');
        const $routeSegmentEl = $('.route-segment');

        if (hotspotsShown) {
            $routeSegmentElCity.addClass('experience-map');
            // $routeSegmentEl.find('svg')[0].setAttribute('preserveAspectRatio', 'xMidYMid meet');
        } else {
            $routeSegmentEl.removeClass('experience-map');
            // $routeSegmentEl.find('svg')[0].setAttribute('preserveAspectRatio', 'none');
        }
        // hotspotsShown ? $routeSegmentEl.addClass('experience-map') : $routeSegmentEl.removeClass('experience-map');
    }

    _setActiveHotspot(id) {
        if (!id) {
            // hide
            return;
        }

        const city = this.getState().get('cities').get('current');

        const $routeSegmentEl = $('.route-segment[data-city=' + city + ']');
        // const $activeHotspot = $(String('.mini-hotspot[data-hotspot-id="' + id + '"]'));
        // const currentCLasses = this.$els['mini-hotspot-' + id].attr('class').split(' ').join(' ');

        // console.log('_setActiveHotspot', id, $routeSegmentEl);

        $routeSegmentEl.find('.mini-hotspot').removeClass('current');
        // $routeSegmentEl.find('.mini-hotspot').each((i, el) => {
        //     $(el).attr('class', $(el).attr('class').replace('current', ''));
        // });
        // this.$els['mini-hotspot-' + id].attr('class', currentCLasses + ' current');
        this.$els['mini-hotspot-' + id].addClass('current');
    }

    _toggleHotspot(e) {
        const hotspotId = e.currentTarget.dataset.hotspotId;
        // const targetToolTipClass = String('.' + e.currentTarget.dataset.hotspotId);
        // const targetEl = $(targetToolTipClass);

        // console.log('hotspotId', hotspotId);
        this.$els['label-hotspot-' + hotspotId].toggleClass('hover');
    }

    _shrinkRoutes() {
        this.$els.routes.forEach(($el, i) => {
            $($el).addClass('inactive');
        });
    }

    _resetMap() {
        this.el.classList.remove('zoomed-in');
        this.$els.routes.forEach(($el, i) => {
            $($el).removeClass('inactive zoomed focus page-ctrl next prev');
        });
    }

    resize() {
        // const height = this.getState().get('browser').height;

        const SVG_DEFAULT_HEIGHT = 650;
        this.ratioY = this.$els.masterPath.height() / SVG_DEFAULT_HEIGHT;

        // calling this method because it handles the page and mobile detection
        this._handleCityChange();
        // const masterPath = $('#master-path');
        // if (masterPath.height() < 650) {
        //     masterPath[0].setAttribute('preserveAspectRatio', 'xMidYMid meet');
        // } else {
        //     masterPath[0].setAttribute('preserveAspectRatio', 'none');
        // }
    }
}

export default MiniMap;
