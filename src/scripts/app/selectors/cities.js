import store from 'store';

export const getNextCities = (next = true, canReturnNull = false) => {
	const currentCity = store.getState().get('cities').get('current');
	const list = store.getState().get('cities').get('list');

	if (!currentCity) {
		return next ? list.get(0) : list.get(list.size - 1);
	}

	const currentIdx = list.findIndex((id) => {
		return id === currentCity;
	});

	let nextIdx = next ? currentIdx + 1 : currentIdx - 1;

	if (nextIdx > list.size - 1) {
		if (canReturnNull) return null;
		nextIdx = 0;
	}

	if (nextIdx < 0) {
		if (canReturnNull) return null;
		nextIdx = list.size - 1;
	}

	return list.get(nextIdx);
};

export const isFeatured = (id) => {
	const list = store.getState().get('cities').get('list');

	const currentIdx = list.findIndex((id_) => {
		return id_ === id;
	});

	return currentIdx >= 0;
};
