import {
    SET_DATA_FOOTER,
    SHOW_FOOTER,
    HIDE_FOOTER,
    UPDATE_UI_THEME
} from './constants';

export function showFooter() {
  return {
    type: SHOW_FOOTER
  };
}

export function hideFooter() {
  return {
    type: HIDE_FOOTER
  };
}

export function updateUITheme(color) {
  return {
    type: UPDATE_UI_THEME,
    color
  };
}

export function setFooterData(data) {
  return {
    type: SET_DATA_FOOTER,
    data: data
  };
}

