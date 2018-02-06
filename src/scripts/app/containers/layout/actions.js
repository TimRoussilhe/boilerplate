import {
	SCROLL,
	SCROLL_ENABLED,
	SCROLL_DISABLED,
	MODAL_SCROLL,
	UI_NAV_HIDE,
	UI_NAV_SHOW,
	UI_NAV_TOGGLE,
	UI_SHOW_LOADING,
	UI_HIDE_LOADING,
} from './constants';

export function scroll(scrollObj) {
	return {
		type: SCROLL,
		scroll: scrollObj,
	};
}

export function hideNav() {
	return {
		type: UI_NAV_HIDE,
	};
}

export function showNav() {
	return {
		type: UI_NAV_SHOW,
	};
}

export function updateScroll(scrollState) {
	return {
		type: SCROLL_ENABLED,
		scrollState,
	};
}

// Direcly disabled scroll ( use for experience video )
export function disableScroll(scrollState) {
	return {
		type: SCROLL_DISABLED,
		scrollState,
	};
}

export function updateModal(modalState) {
	return {
		type: MODAL_SCROLL,
		modalState,
	};
}

export function toggleNav() {
	return {
		type: UI_NAV_TOGGLE,
	};
}

export function showLoader() {
	return {
		type: UI_SHOW_LOADING,
	};
}

export function hideLoader() {
	return {
		type: UI_HIDE_LOADING,
	};
}
