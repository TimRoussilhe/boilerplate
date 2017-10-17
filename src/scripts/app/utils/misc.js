/* global Modernizr */
// import Detectizr from 'detectizr';
// import Modernizr from 'Modernizr';

import {VIDEO_EXTENSIONS, IMAGE_EXTENSIONS, VIDEO_TYPE, IMAGE_TYPE, FILE_TYPE} from 'constants/misc';

export const getExtension = (src) => {
	let extension = src.split('.').pop();
	extension = extension.split('?')[0].toLowerCase();

	return VIDEO_EXTENSIONS.indexOf(extension) > -1 || IMAGE_EXTENSIONS.indexOf(extension) > -1 ? extension : null;
};

export const getAssetType = (src, options = {}) => {
	if (options.type) return options.type;

	const extension = getExtension(src);

	if (VIDEO_EXTENSIONS.indexOf(extension) > -1) return VIDEO_TYPE;
	if (IMAGE_EXTENSIONS.indexOf(extension) > -1) return IMAGE_TYPE;

	// anything else
	return FILE_TYPE;
};

export const getAssetByDevice = (o = null, options = {}) => {
	if (!o) {
		console.error('getAssetByDevice: no object provided');
		return null;
	}

	let asset = null;

	switch (Detectizr.device.type) {
	case 'desktop': asset = o.lg; break;
	case 'tablet': asset = o.med; break;
	case 'mobile': asset = o.sml; break;
	default: asset = o.lg; break;
	}

	// special case
	if (asset.video) {
		asset.fallback = asset.src;
		asset.src = asset.video;
		options.type = VIDEO_TYPE;
	} else {
		options.type = IMAGE_TYPE;
	}

	// if src is video BUT on mobile/tablet, switch src/fallback.
	// Otherwise, add type= video
	if (getAssetType(asset.src, options) === VIDEO_TYPE && Detectizr.device.type !== 'desktop' && asset.fallback) {
		asset.src = asset.fallback;
		asset.type = options.type = IMAGE_TYPE;
	}

	asset.type = getAssetType(asset.src, options);

	switch (asset.type) {
	case VIDEO_TYPE:
		// dirty
		asset.extension = getExtension(asset.src) ? getExtension(asset.src) : 'mp4';
		asset.isVideo = true;
		break;
	case IMAGE_TYPE:
		// dirty
		asset.extension = getExtension(asset.src) ? getExtension(asset.src) : 'jpg';
		if (Modernizr.webp) asset.extension = 'webp';
		asset.isImage = true;
		break;
	default: break;
	}

	if (asset.isImage) {
		// Build the params
		options.params = options.params ? options.params : {};

		const MAX_WIDTH_DESKTOP = 2500;
		const MAX_WIDTH_TABLET = 1024;
		const MAX_WIDTH_MOBILE = 480;

		const dimensions = {
			desktop: {
				width: o.dimensions.width,
				height: o.dimensions.height,
			},
			tablet: {
				width: options.dimensions_tablet ? options.dimensions_tablet.width : o.dimensions.width,
				height: options.dimensions_tablet ? options.dimensions_tablet.height : o.dimensions.height,
			},
			mobile: {
				width: options.dimensions_mobile ? options.dimensions_mobile.width : o.dimensions.width,
				height: options.dimensions_mobile ? options.dimensions_mobile.height : o.dimensions.height,
			},
		};

		if (dimensions.desktop.width > MAX_WIDTH_DESKTOP) {
			dimensions.desktop.height *= MAX_WIDTH_DESKTOP / dimensions.desktop.width;
			dimensions.desktop.width = MAX_WIDTH_DESKTOP;
		}

		if (dimensions.tablet.width > MAX_WIDTH_TABLET) {
			dimensions.tablet.height *= MAX_WIDTH_TABLET / dimensions.tablet.width;
			dimensions.tablet.width = MAX_WIDTH_TABLET;
		}

		if (dimensions.mobile.width > MAX_WIDTH_MOBILE) {
			dimensions.mobile.height *= MAX_WIDTH_MOBILE / dimensions.mobile.width;
			dimensions.mobile.width = MAX_WIDTH_MOBILE;
		}

		asset.dimensions = {};

		// Width of the assets
		if (!options.params.width) {
			switch (Detectizr.device.type) {
			case 'desktop':
				options.params.width = dimensions.desktop.width;
				// if (window.devicePixelRatio) options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP ? options.params.width *= window.devicePixelRatio : options.params.width = MAX_WIDTH_DESKTOP;
				asset.dimensions = dimensions.desktop;
				break;
			case 'tablet':
				options.params.width = dimensions.tablet.width;
				// if (window.devicePixelRatio && options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP) options.params.width *= window.devicePixelRatio;
				asset.dimensions = dimensions.tablet;
				break;
			case 'mobile':
				options.params.width = dimensions.mobile.width;
				// if (window.devicePixelRatio && options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP) options.params.width *= window.devicePixelRatio;
				asset.dimensions = dimensions.mobile;
				break;
			default: asset = o.lg; break;
			}
		}

		// console.log('asset.dimensions', asset.dimensions);

		// pixel ratio
		if (window.devicePixelRatio) options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP ? options.params.width *= window.devicePixelRatio : options.params.width = MAX_WIDTH_DESKTOP;
		// if (window.devicePixelRatio) {
		//     // If divice pixel ratio * current width is less greater than the maximum (origin size), then get this size
		//     options.params.width = options.params.width * window.devicePixelRatio <= dimensions.desktop.width ? Math.round(options.params.width * window.devicePixelRatio) : o.dimensions.width;
		// }

		let params = `=w${options.params.width}`;
		if (Modernizr.webp) params += '-rw';

		asset.src += params;
	}

	return asset;
};

export const ordinalSuffixOf = (i) => {
	const j = i % 10;
	const k = i % 100;

	if (j === 1 && k !== 11) {
		return i + 'st';
	}
	if (j === 2 && k !== 12) {
		return i + 'nd';
	}
	if (j === 3 && k !== 13) {
		return i + 'rd';
	}
	return i + 'th';
};

export const getDate = (locale, dt) => {
	const date = {};
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	// const localeTime = dt.setUTCHours(GMT HERE);
	// If non English
	if (locale.indexOf('en-') === -1) {
		date.day = dt.getUTCDate() < 10 ? '0' + dt.getUTCDate() : dt.getUTCDate();
	} else {
		date.day = ordinalSuffixOf(dt.getUTCDate());
	}

	date.weekDay = days[dt.getUTCDay()];
	date.nbDay = dt.getUTCDate() < 10 ? '0' + dt.getUTCDate() : dt.getUTCDate();
	// date.month = dt.toLocaleString(locale, {month: 'long'});

	date.month = months[dt.getUTCMonth()];
	date.nbMonth = parseInt(dt.getUTCMonth() + 1, 10) < 10 ? '0' + parseInt(dt.getUTCMonth() + 1, 10) : parseInt(dt.getUTCMonth() + 1, 10);
	date.year = dt.getFullYear();
	date.hour = dt.getUTCHours();
	if (date.hour > 12) date.hour -= 12;
	date.minute = dt.getMinutes();
	date.second = dt.getSeconds();
	date.UTCHours = dt.getUTCHours() + (dt.getTimezoneOffset() / 60) < 10 ? '0' + dt.getUTCHours() + (dt.getTimezoneOffset() / 60) : dt.getUTCHours() + (dt.getTimezoneOffset() / 60);
	date.UTCMinutes = dt.getUTCMinutes() < 10 ? '0' + dt.getUTCMinutes() : dt.getUTCMinutes();
	date.UTCSeconds = dt.getUTCSeconds() < 10 ? '0' + dt.getUTCSeconds() : dt.getUTCSeconds();
	date.tz = `${date.year}${date.nbMonth}${date.nbDay}T${date.UTCHours}${date.UTCMinutes}${date.UTCSeconds}Z`;

	return date;
};

export const rad = (x) => {
	return x * Math.PI / 180;
};

export const metersToMiles = (meters) => {
	return meters * 0.00062137;
};

export const fitAsset = (config_) => {
	const wi = config_.width;
	const hi = config_.height;
	const ri = wi / hi;
	const ws = config_.containerWidth;
	const hs = config_.containerHeight;
	const rs = ws / hs;
	const newDimensions = {};

	if (ri > rs) {
		newDimensions.ratio = hs / hi;
		newDimensions.w = Math.ceil(wi * hs / hi, newDimensions.h = hs);
	} else {
		newDimensions.ratio = ws / wi;
		newDimensions.w = ws;
		newDimensions.h = Math.ceil(hi * ws / wi);
	}

	newDimensions.top = (hs - newDimensions.h) / 2;
	newDimensions.left = (ws - newDimensions.w) / 2;

	return newDimensions;
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export const debounce = (func, wait, immediate) => {
	let timeout = null;
	return () => {
		const args = arguments;
		const later = () => {
			timeout = null;
			if (!immediate) func.apply(this, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(this, args);
	};
};

/**
 * Interpolates a Catmull-Rom Spline through a series of x/y points
 * Converts the CR Spline to Cubic Beziers for use with SVG items
 *
 * If 'alpha' is 0.5 then the 'Centripetal' variant is used
 * If 'alpha' is 1 then the 'Chordal' variant is used
 *
 *
 * @param  {Array} data - Array of points, each point in object literal holding x/y values
 * @return {String} d - SVG string with cubic bezier curves representing the Catmull-Rom Spline
 */
export const catmullRomFitting = (data, alpha = 1) => {
	if (alpha === 0 || alpha === undefined) {
		return false;
	}

	let d = Math.round(data[0].x) + ',' + Math.round(data[0].y) + ' ';
	const length = data.length;
	for (let i = 0; i < length - 1; i++) {
		const p0 = i === 0 ? data[0] : data[i - 1];
		const p1 = data[i];
		const p2 = data[i + 1];
		const p3 = i + 2 < length ? data[i + 2] : p2;

		const d1 = Math.sqrt(Math.pow(p0.x - p1.x, 2) + Math.pow(p0.y - p1.y, 2));
		const d2 = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
		const d3 = Math.sqrt(Math.pow(p2.x - p3.x, 2) + Math.pow(p2.y - p3.y, 2));

		// Catmull-Rom to Cubic Bezier conversion matrix

		// A = 2d1^2a + 3d1^a * d2^a + d3^2a
		// B = 2d3^2a + 3d3^a * d2^a + d2^2a

		// [   0             1            0          0          ]
		// [   -d2^2a /N     A/N          d1^2a /N   0          ]
		// [   0             d3^2a /M     B/M        -d2^2a /M  ]
		// [   0             0            1          0          ]

		const d3powA = Math.pow(d3, alpha);
		const d3pow2A = Math.pow(d3, 2 * alpha);
		const d2powA = Math.pow(d2, alpha);
		const d2pow2A = Math.pow(d2, 2 * alpha);
		const d1powA = Math.pow(d1, alpha);
		const d1pow2A = Math.pow(d1, 2 * alpha);

		const A = 2 * d1pow2A + 3 * d1powA * d2powA + d2pow2A;
		const B = 2 * d3pow2A + 3 * d3powA * d2powA + d2pow2A;
		let N = 3 * d1powA * (d1powA + d2powA);
		if (N > 0) {
			N = 1 / N;
		}
		let M = 3 * d3powA * (d3powA + d2powA);
		if (M > 0) {
			M = 1 / M;
		}

		let bp1 = {
			x: (-d2pow2A * p0.x + A * p1.x + d1pow2A * p2.x) * N,
			y: (-d2pow2A * p0.y + A * p1.y + d1pow2A * p2.y) * N,
		};

		let bp2 = {
			x: (d3pow2A * p1.x + B * p2.x - d2pow2A * p3.x) * M,
			y: (d3pow2A * p1.y + B * p2.y - d2pow2A * p3.y) * M,
		};

		if (bp1.x === 0 && bp1.y === 0) {
			bp1 = p1;
		}
		if (bp2.x === 0 && bp2.y === 0) {
			bp2 = p2;
		}

		d += 'C' + bp1.x + ',' + bp1.y + ' ' + bp2.x + ',' + bp2.y + ' ' + p2.x + ',' + p2.y + ' ';
	}

	return d;
};
