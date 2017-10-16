import {
    SET_PREDICTION_SEARCH,
    SET_RESULT_SEARCH,
    SET_RESULT_NGOS_SEARCH,
    SET_EXPERIENCE_ITEM_SEARCH,
    IS_LOADING_SEARCH,
    SET_ERROR_SEARCH,
    IS_SUBMITTED_ONCE_SEARCH,
    IS_LOADING_PREDICTION_SEARCH,
    SET_CACHED_RESULT_SEARCH,
    IS_BLOCKING_SEARCH,
    RESET_SEARCH,
    SET_LIST_SEARCH
} from './constants';

export function setPrediction(predictions) {
    return {
        type: SET_PREDICTION_SEARCH,
        predictions: predictions
    };
}

export function setListSearch(list) {
    return {
        type: SET_LIST_SEARCH,
        list: list
    };
}

export function setResultSearch(results) {
    return {
        type: SET_RESULT_SEARCH,
        results: results
    };
}

export function setListCachedResult(cached) {
    return {
        type: SET_CACHED_RESULT_SEARCH,
        cached: cached
    };
}

export function setResultNGOsSearch(results) {
    return {
        type: SET_RESULT_NGOS_SEARCH,
        results: results
    };
}

export function setExperienceItemSearch(item) {
    return {
        type: SET_EXPERIENCE_ITEM_SEARCH,
        item: item
    };
}

export function isLoadingSearch(isLoading) {
    return {
        type: IS_LOADING_SEARCH,
        isLoading: isLoading
    };
}

export function isLoadingPredictionSearch(isLoadingPrediction) {
    return {
        type: IS_LOADING_PREDICTION_SEARCH,
        isLoadingPrediction: isLoadingPrediction
    };
}

export function isBlockingSearch(isBlocking) {
    return {
        type: IS_BLOCKING_SEARCH,
        isBlocking: isBlocking
    };
}

export function isSubmittedOnceSearch() {
    return {
        type: IS_SUBMITTED_ONCE_SEARCH
    };
}

export function setErrorSearch(error) {
    return {
        type: SET_ERROR_SEARCH,
        error: error
    };
}

export function resetSearch() {
    return {
        type: RESET_SEARCH
    };
}
