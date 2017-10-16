import store from 'store';

export const isAssetLoaded = (id) => {
    const list = store.getState().get('homepage').get('intro_list');

    let val = false;

    list.entrySeq().forEach(([key, value]) => {
        if (key === id) val = value;
    });

    return val;
};
