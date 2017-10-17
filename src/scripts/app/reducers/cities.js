import {
	SET_CURRENT_CITY,
	SET_LIST_CITIES,
} from 'constants/cities';

import {Record, List} from 'immutable';

const InitialState = Record({
	current: null,
	list: new List(),
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const cities = (state = initialState, action) => {
	switch (action.type) {
	case SET_CURRENT_CITY: {
		if (action.city_slug === false) return state;

		// Has to be a featured one!
		const currentIdx = state.list.findIndex((id) => {
			return id === action.city_slug;
		});

		if (currentIdx === -1 && action.city_slug) return state;

		return state.set('current', action.city_slug);
	}
	case SET_LIST_CITIES: {
		return state.set('list', new List(action.cities_list));
	}
	default: {
		return state;
	}
	}
};

export default cities;
