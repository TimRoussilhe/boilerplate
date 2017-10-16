import {
    SHOW_HEADER,
    HIDE_HEADER,
    TOGGLE_HAMBURGER_MENU,
    SHOW_HAMBURGER_MENU,
    HIDE_HAMBURGER_MENU,
    SHOW_LOGO,
    HIDE_LOGO
} from './constants';

export function showHeader() {
  return {
    type: SHOW_HEADER
  };
}

export function hideHeader() {
  return {
    type: HIDE_HEADER
  };
}

export function hideLogo() {
  return {
    type: HIDE_LOGO
  };
}

export function showLogo() {
  return {
    type: SHOW_LOGO
  };
}

export function toggleHamburgerMenu() {
  return {
    type: TOGGLE_HAMBURGER_MENU
  };
}

export function showHamburgerMenu() {
  return {
    type: SHOW_HAMBURGER_MENU
  };
}

export function hideHamburgerMenu() {
  return {
    type: HIDE_HAMBURGER_MENU
  };
}
