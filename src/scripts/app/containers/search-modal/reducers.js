import {
    SET_PREDICTION_SEARCH,
    SET_RESULT_SEARCH,
    SET_RESULT_NGOS_SEARCH,
    SET_EXPERIENCE_ITEM_SEARCH,
    IS_LOADING_PREDICTION_SEARCH,
    IS_LOADING_SEARCH,
    SET_ERROR_SEARCH,
    IS_SUBMITTED_ONCE_SEARCH,
    SET_CACHED_RESULT_SEARCH,
    IS_BLOCKING_SEARCH,
    RESET_SEARCH,
    SET_LIST_SEARCH
} from './constants';

import {Record, fromJS, List, Map} from 'immutable';

const InitialState = Record({
    predictions: null,
    results: null,
    results_ngos: null,
    experience_item: null,
    list: null,
    cached_result: null,
    isLoading: false,
    isLoadingPrediction: false,
    error: false,
    isSubmittedOnce: false,
    isBlocking: false
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_PREDICTION_SEARCH: {
            return state.set('predictions', fromJS(action.predictions));
        }
        case SET_EXPERIENCE_ITEM_SEARCH: {
            // if (action.item) state = state.set('isLoading', false);
            return state.set('experience_item', fromJS(action.item));
        }
        case SET_RESULT_SEARCH: {
            // if (action.results) state = state.set('isLoading', false);
            return state.set('results', new List(action.results));
        }
        case SET_CACHED_RESULT_SEARCH: {
            // if (action.results) state = state.set('isLoading', false);
            return state.set('cached_result', new Map(action.cached));
        }
        case SET_RESULT_NGOS_SEARCH: {
            // if (action.results) state = state.set('isLoading', false);
            return state.set('results_ngos', new List(action.results));
        }
        case SET_LIST_SEARCH: {
            return state.set('list', new List(action.list));
        }
        case IS_LOADING_SEARCH: {
            return state.set('isLoading', action.isLoading);
        }
        case IS_LOADING_PREDICTION_SEARCH: {
            return state.set('isLoadingPrediction', action.isLoadingPrediction);
        }
        case IS_BLOCKING_SEARCH: {
            return state.set('isBlocking', action.isBlocking);
        }
        case IS_SUBMITTED_ONCE_SEARCH: {
            return state.set('isSubmittedOnce', true);
        }
        case SET_ERROR_SEARCH: {
            return state.set('error', action.error);
        }
        case RESET_SEARCH: {
            // Keeps the list in memory
            state = state.set('error', false);
            state = state.set('isLoading', false);
            state = state.set('isLoadingPrediction', false);
            state = state.set('isBlocking', false);
            state = state.set('isSubmittedOnce', false);
            state = state.set('results', null);
            state = state.set('results_ngos', null);
            state = state.set('experience_item', null);
            state = state.set('predictions', null);
            return state;
        }
        default: {
            return state;
        }
    }
};

export default search;
