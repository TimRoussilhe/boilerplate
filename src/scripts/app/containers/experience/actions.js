import {
    SET_HOTSPOTS_LIST,
    SET_HOTSPOT_OPEN_IT,
    SET_NEXT_HOTSPOT_INIT,
    SET_IS_SHOWN_HOTSPOT,
    SET_HOTSPOT_ID,
    SET_BACK_BUTTON_URL,
    RESET_HOTSPOTS
} from './constants';

export function resetHotspots() {
    return {
        type: RESET_HOTSPOTS
    };
}

export function setHotspotsList(list) {
    return {
        list: list,
        type: SET_HOTSPOTS_LIST
    };
}

export function setHotspotId(id) {
    return {
        id: id,
        type: SET_HOTSPOT_ID
    };
}

export function setNextHotspotInit(isInit) {
    return {
        isInit: isInit || false,
        type: SET_NEXT_HOTSPOT_INIT
    };
}

export function setIsShownHotspot(isShown) {
    return {
        isShown: isShown || false,
        type: SET_IS_SHOWN_HOTSPOT
    };
}

export function setHotspotOpenIt(openIt) {
    return {
        openIt: openIt || false,
        type: SET_HOTSPOT_OPEN_IT
    };
}

export function hideExperience() {
    return {
        id: null,
        type: SET_HOTSPOT_ID
    };
}

export function setBackButtonUrl(url) {
    return {
        url: url,
        type: SET_BACK_BUTTON_URL
    };
}
