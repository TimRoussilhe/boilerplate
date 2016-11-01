/* global $ _ */

import CV from 'config/currentValues';
import ROUTES from 'router/routes';
import BaseView from 'abstract/baseView';

class NavigationView extends BaseView {

	constructor(options){

		super(options);
		this.href = null;

	}

	initDOM() {

		console.log('initDOM');
		console.log(this);
		this.a$.nav = this.$el.find('ul');
		this.a$.navItems = this.a$.nav.find('li a');
		super.initDOM();

	}

	setupDOM() {
		this.setNavLayout();
	}

	onLinkClicked(e) {
		console.log('onLinkClicked');
		super.onLinkClicked(e);
	}

	setNavLayout(pageURL) {
		this.resetCurrentNavItem();

		const currentPage = pageURL ? ROUTES.getRouteByUrl(pageURL) : ROUTES.getRouteByID(CV.currentPage);
		if (currentPage === null) return;

		let $currentNavItem = this.a$.nav.find('*[data-page="' + currentPage.id + '"]');
		// if no nav item SKIP. this would happen when rendering legacy and 404.
		if ($currentNavItem.length === 0) return;
		$currentNavItem.addClass('active');
	}

	resetCurrentNavItem() {
		for (let i = 0; i < this.a$.navItems.length; i++) {
			$(this.a$.navItems[i]).removeClass('active');
		}
	}
}

export default NavigationView;
