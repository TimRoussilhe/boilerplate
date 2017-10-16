import {
    SET_DATA_LOADER,
    SET_PCT_LOADING,
    SHOW_LOADER,
    SHOWN_LOADER,
    HIDE_LOADER,
    HIDDEN_LOADER,
    SET_TYPE_LOADER
} from './constants';

export function setLoaderData(data) {
  return {
    type: SET_DATA_LOADER,
    data: data
  };
}

export function showLoader(typeLoader) {
  return {
    type: SHOW_LOADER,
    typeLoader: typeLoader
  };
}

export function shownLoader() {
  return {
    type: SHOWN_LOADER
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}

export function hiddenLoader() {
  return {
    type: HIDDEN_LOADER
  };
}

export function setPctLoading(pct) {
  return {
    type: SET_PCT_LOADING,
    pct: pct
  };
}

export function setTypeLoader(typeLoader) {
  return {
    type: SET_TYPE_LOADER,
    typeLoader: typeLoader
  };
}
