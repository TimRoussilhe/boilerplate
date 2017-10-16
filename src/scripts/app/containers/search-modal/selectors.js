import store from 'store';

export const getCachedResult = (search) => {
    const cached = store.getState().get('search').get('cached_result');

    let result = null;

    cached.entrySeq().forEach(([key, value]) => {
        if (key.replace(' ', '').toLowerCase() === search.replace(' ', '').toLowerCase()) result = value;
    });

    return result;
};
