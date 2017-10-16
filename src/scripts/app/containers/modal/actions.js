import {
    SET_TYPE_MODAL,
    SET_DATA_MODAL,
    SHOW_MODAL,
    HIDE_MODAL
} from './constants';

export function showModal(typeModal) {
  return {
    type: SHOW_MODAL,
    typeModal: typeModal
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}

export function setTypeModal(typeModal) {
  return {
    type: SET_TYPE_MODAL,
    typeModal: typeModal
  };
}

export function setModalsData(data) {
  return {
    type: SET_DATA_MODAL,
    data: data
  };
}
