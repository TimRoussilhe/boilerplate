import {
    SET_CITY_SEARCH
} from './constants';

export function setCity(city) {
    return {
        type: SET_CITY_SEARCH,
        city: city || null
    };
}
