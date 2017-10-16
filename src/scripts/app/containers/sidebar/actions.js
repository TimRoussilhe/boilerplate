import {
    SET_DATA_SIDEBAR,
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    TOGGLE_SIDEBAR,
    HOVER_CITY,
    BLOCK_SIDEBAR,
    UNBLOCK_SIDEBAR
} from './constants';

export function setSidebarData(data) {
  return {
    type: SET_DATA_SIDEBAR,
    data: data
  };
}

export function hoverCity(city) {
  return {
    type: HOVER_CITY,
    city: city
  };
}

export function showSidebar() {
  return {
    type: SHOW_SIDEBAR
  };
}

export function hideSidebar() {
  return {
    type: HIDE_SIDEBAR
  };
}

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  };
}

export function blockSidebar() {
  return {
    type: BLOCK_SIDEBAR
  };
}

export function unBlockSidebar() {
  return {
    type: UNBLOCK_SIDEBAR
  };
}
