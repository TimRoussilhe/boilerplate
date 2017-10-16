import {
    LOADED_INTRO_HOMEPAGE,
    SET_INTRO_LIST_HOMEPAGE
} from './constants';

export function loadedIntroHomepage(id) {
    return {
        type: LOADED_INTRO_HOMEPAGE,
        id: id
    };
}

export function setIntroListHomepage(list) {
    return {
        type: SET_INTRO_LIST_HOMEPAGE,
        list: list
    };
}

