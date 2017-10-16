import {
    INIT_GMAPS,
    RESET_GMAPS,
    SHOW_GMAPS,
    IS_DISPOSED_GMAPS,
    GET_SCRIPT_GMAPS,
    HAS_SCRIPT_GMAPS,
    RESET_POSITION_GMAPS,
    IS_INIT_GMAPS,
    IS_INIT_POSITION_GMAPS,
    INIT_POSITION_GMAPS,
    DISPOSE_GMAPS,
    HIDE_GMAPS
} from './constants';

export function resetGmaps() {
    return {
        type: RESET_GMAPS
    };
}

export function resetPositionGmaps() {
    return {
        type: RESET_POSITION_GMAPS
    };
}

export function initGmaps() {
    return {
        type: INIT_GMAPS
    };
}

export function initPositionGmaps(data = null) {
    return {
        type: INIT_POSITION_GMAPS,
        data: data
    };
}

export function getScriptGmaps() {
    return {
        type: GET_SCRIPT_GMAPS
    };
}

export function hasScriptGmaps() {
    return {
        type: HAS_SCRIPT_GMAPS
    };
}

export function isInitGmaps() {
    return {
        type: IS_INIT_GMAPS
    };
}

export function isInitPositionGmaps() {
    return {
        type: IS_INIT_POSITION_GMAPS
    };
}

export function isDisposedGmaps() {
    return {
        type: IS_DISPOSED_GMAPS
    };
}

export function showGmaps() {
    return {
        type: SHOW_GMAPS
        // data: data
    };
}

export function hideGmaps() {
    return {
        type: HIDE_GMAPS
    };
}

export function disposeGmaps() {
    return {
        type: DISPOSE_GMAPS
    };
}
