// ACTION
// export const END_POINT = '/static/gpride/json/dummy';
export const ASSET_DIR = '/static/gpride/img/dummy';

// Depends of the environnement
const JSON_DIR_ENV = {
    dev: '/static/gpride/json',
    prod: '/static/gpride/json'
};

export const JSON_DIR = process.env.NODE_ENV === 'development' ? JSON_DIR_ENV.dev : JSON_DIR_ENV.prod;
export let END_POINT = null;
export let SEARCH_END_POINT = null;

export const SET_END_POINT = (endPoint) => {
    // Can only set it once
    if (END_POINT === null) END_POINT = endPoint;
    return END_POINT;
};

export const SET_SEARCH_END_POINT = (endPoint) => {
    // Can only set it once
    if (SEARCH_END_POINT === null) SEARCH_END_POINT = endPoint;
    return SEARCH_END_POINT;
};

// Internal API endpoints
export const GMAPS_KEY = 'AIzaSyCnmnIclqTaRTkPlZplfkil8raQL2jSXrw';
export const PLACES_END_POINT = '/api/google-map/?';
export const DISTANCE_END_POINT = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
// export const DISTANCE_END_POINT = '/api/distance-matrix/?';
