/* global window */

import CV from 'config/currentValues';

class ShareService {

	constructor() {

		this.sizes = {
			facebook: [660, 360],
			twitter: [500, 310],
			google: [500, 425],
			pinterest: [750, 320]
		};

		this.urls = {
			facebook: 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
			twitter: 'https://twitter.com/intent/tweet?url={{url}}&text={{desc}}',
			google: 'https://plus.google.com/share?url={{url}}',
			pinterest: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{img}}&description={{title}},%20{{desc}}'
		};

		this.popup = null;

	}

	init(baseDatas = null) {

		this.setDatas();
		if (!baseDatas) baseDatas = this.getTitleDescImg();
		this.onGetDatas(baseDatas, true);

	}

	update() {

		this.setDatas();
		this.onGetDatas(this.getTitleDescImg(), false);

	}

	setDatas() {

		this.data = {};
		this.data.path = Backbone.history.getFragment();

	}

	onGetDatas(resp, force = false) {

		CV.share = resp;

		if (resp && resp.title && !force) this.setTitleDescImg(resp.title, resp.desc, resp.img, resp.twitter);

	}

	setTitleDescImg(title, desc, img = null, twitter = null) {
		return;
		let meta;
		document.title = title;

		if (desc && (meta = document.querySelector("meta[name='description']")))
			meta.setAttribute('content', desc);

		if (desc && (meta = document.querySelector("meta[property='og\\:description']")))
			meta.setAttribute('content', desc);

		if (title && (meta = document.querySelector("meta[property='og\\:title']")))
			meta.setAttribute('content', title);

		if (img && (meta = document.querySelector("meta[property='og\\:image']")))
			meta.setAttribute('content', img);

		if (twitter && (meta = document.querySelector("meta[name='twitter:title']")))
			meta.setAttribute('content', twitter);
	}

	getTitleDescImg() {

		return {
			title: document.title,
			desc: document.querySelector("meta[name='description']") ? document.querySelector("meta[name='description']").getAttribute('content') : '',
			img: document.querySelector("meta[property='og\\:image']") ? document.querySelector("meta[property='og\\:image']").getAttribute('content') : '',
			twitter: document.querySelector("meta[name='twitter:title']") ? document.querySelector("meta[name='twitter:title']").getAttribute('content') : ''
		};

	}

	// ###########
	// # POPUP

	openPopup(el, debug = false) {

		let data = this.getShareDatas(el);
		let w;
		let h;

		console.log(this.popup);

		if (this.popup) {

			if (!CV.isIE && this.popup && this.popup.window && this.popup.window.close) this.popup.window.close();
			this.popup = null;

		}

		if (this.sizes[data.id]) {
			w = this.sizes[data.id][0];
			h = this.sizes[data.id][1];
		}
		else {
			w = 500;
			h = 400;
		}

		// if you use SDK
		if (data.id === 'facebook' && (typeof FB !== 'undefined' && FB !== null)) {

			let method = data.method ? data.method : 'feed';

			let params = {
				method,
				name: data.title,
				link: data.url,
				description: data.desc
			};

			FB.ui(params, function (response) {
				let success = (response && response.post_id);
			});

			return;
		}

		if (!this.urls[data.id]) return;

		console.log('datas.url', data.url);
		let href = this.urls[data.id];
		href = href.replace('{{url}}', encodeURIComponent(data.url));
		href = href.replace('{{title}}', encodeURIComponent(data.title));
		href = href.replace('{{desc}}', encodeURIComponent(data.desc));
		href = href.replace('{{img}}', encodeURIComponent(data.img));

		console.log(href);

		this.popup = window.open(href, data.id, `width=${w},height=${h},left=${this.getX(w)},top=${this.getY(h)},scrollbars=1,location=0,menubar=0,resizable=0,status=0,toolbar=0`);
		this.popup.focus();

	}

	/*
	 * Get share datas from DOM element
	 *
	 * @param {HTMLElement} el
	 * @example
	 * <a href=""
	 share-id="facebook|twitter|google|pinterest"
	 share-method
	 share-url
	 share-title
	 share-desc
	 share-img></a>
	 */
	getShareDatas(el) {

		let obj = {};
		obj.id = el.getAttribute('share-id');

		if (el.getAttribute('share-method')) obj.method = el.getAttribute('share-method');

		// # url

		obj.url = CV.shareUrl + this.data.path;
		obj.desc = CV.share.desc;

		console.log('this.data.path', this.data.path);
		console.log('share-url', obj.url);

		if (el.getAttribute('share-url')) obj.url = el.getAttribute('share-url');

		// # title
		obj.title = CV.share.title;

		if (el.getAttribute('share-title')) obj.title = el.getAttribute('share-title');

		for (let i = 0; i < el.attributes.length; i++) {

			const attr = el.attributes[i];

			if (!attr.name.match(/^data/))
				obj.title = obj.title.replace(`{{${attr.name}}}`, attr.value);

		}

		// # desc

		if (CV.share.twitter && obj.id === 'twitter') obj.desc = CV.share.twitter;

		if (el.getAttribute('share-desc'))
			obj.desc = el.getAttribute('share-desc');

		for (let j = 0; j < el.attributes.length; j++) {

			const attr = el.attributes[j];
			if (!attr.name.match(/^data/))
				obj.desc = obj.desc.replace(`{{${attr.name}}}`, attr.value);

		}

		// # img
		obj.img = CV.share.img;

		if (el.getAttribute('share-img'))
			obj.img = el.getAttribute('share-img');

		if (obj.img.substr(0, 4) !== 'http')
			obj.img = CV.baseUrl + obj.img;

		return obj;
	}

	getX(w) {

		let windowLeft = window.screenLeft ? window.screenLeft : window.screenX;
		return windowLeft + (window.outerWidth - w) * .5;

	}

	getY(h) {

		let windowTop = window.screenTop ? window.screenTop : window.screenY;
		return windowTop + (window.outerHeight - h) * .5;

	}

}

export default new ShareService();
