import {
    SET_DATA_YTMODAL,
    SET_OPEN_NEXT_TIME_YTMODAL
} from './constants';

export function setDataYTModal(data) {
    return {
        type: SET_DATA_YTMODAL,
        data: data || null
    };
}


export function setOpenNextTimeYTModal(openNextTime) {
    return {
        type: SET_OPEN_NEXT_TIME_YTMODAL,
        openNextTime: openNextTime
    };
}
