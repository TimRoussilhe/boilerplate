import {
    SET_DATA_YTMODAL,
    SET_OPEN_NEXT_TIME_YTMODAL
} from './constants';

import {Record, fromJS} from 'immutable';

const InitialState = Record({
    data: null,
    openNextTime: false
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const ytmodal = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_YTMODAL: {
            return state.set('data', fromJS(action.data));
        }
        case SET_OPEN_NEXT_TIME_YTMODAL: {
            return state.set('openNextTime', action.openNextTime);
        }
        default: {
            return state;
        }
    }
};

export default ytmodal;
