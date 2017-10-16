import {
    ZOOM_OUT,
    ZOOM_IN,
    SHOW_HOTSPOTS,
    HIDE_HOTSPOTS,
    TOGGLE_HOTSPOTS
} from './constants';

export function zoomInCity(city) {
  return {
    type: ZOOM_IN,
    city: city
  };
}

export function zoomOutAll() {
  return {
    type: ZOOM_OUT
  };
}

export function showHotspots() {
  return {
    type: SHOW_HOTSPOTS
  };
}

export function hideHotspots() {
  return {
    type: HIDE_HOTSPOTS
  };
}

export function toggleHotspots() {
  return {
    type: TOGGLE_HOTSPOTS
  };
}
