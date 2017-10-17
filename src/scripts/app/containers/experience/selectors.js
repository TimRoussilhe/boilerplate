import store from 'store';

export const getHotspotData = (id) => {
	const list = store.getState().get('experience').get('hotspots_list');

	let hotspotData_ = null;

	list.forEach((hotspotData, i) => {
		if (hotspotData.id === id) hotspotData_ = hotspotData;
	});

	return hotspotData_;
};

export const getCurrentHotspotData = () => {
	console.log(store.getState().get('experience').get('hotspots_list'));
	console.log(store.getState().get('experience'));
	const id = store.getState().get('experience').get('hotspot_id');
	console.log('id', id);
	return getHotspotData(id);
};

export const getNextHotspotData = () => {
	const list = store.getState().get('experience').get('hotspots_list');
	const id = store.getState().get('experience').get('hotspot_id');
	console.log('id', id);
	const currentIdx = list.findIndex((hotspot) => {
		return id === hotspot.id;
	});
	console.log('currentIdx', currentIdx);
	const nextIdx = currentIdx + 1;

	if (nextIdx > list.size - 1) {
		// nextIdx = 0;
		return null;
	}

	const nextId = list.get(nextIdx).id;

	return getHotspotData(nextId);
};

export const getFirstHotspotData = (city_ = null) => {
	const city = city_ ? city_ : store.getState().get('cities').get('current');
	if (!city) return null;

	const list = store.getState().get('experience').get('hotspots_list');

	let idxFirstHotspot = null;

	list.forEach((hotspot, i) => {
		if (city === hotspot.city_id && idxFirstHotspot === null) idxFirstHotspot = i;
	});

	if (idxFirstHotspot === null) return null;

	console.log('idxFirstHotspot', idxFirstHotspot);

	return list.get(idxFirstHotspot);
};
