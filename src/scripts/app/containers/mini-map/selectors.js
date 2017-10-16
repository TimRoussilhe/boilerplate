import store from 'store';

export const getHotspotsByCity = (city) => {
    const allSpots = store.getState().get('experience').get('hotspots_list');
    const citySpots = allSpots.filter((spot) => {
        return spot.city_id === city;
    });

    return citySpots;
};
