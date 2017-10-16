import {
    SET_CURRENT_CITY,
	SET_LIST_CITIES
} from 'constants/cities';

export function setCurrentCity(citySlug) {
  return {
    type: SET_CURRENT_CITY,
    city_slug: citySlug
  };
}

export function setListCities(citiesList) {
  return {
    type: SET_LIST_CITIES,
    cities_list: citiesList
  };
}
