import AbstractPageContainer from 'abstract/Pagecontainer';
import Homepage from 'components/homepage/Homepage';

// actions
// import {setIntroListHomepage} from './actions';

class HomepageContainer extends AbstractPageContainer {

	constructor() {
		super();

		this.Component = Homepage;

	}

	initComponent() {
		this.getData().then(() => {
			this.initActions();
			this.initData();

			this.options.data = this.data;
			this._component = new this.Component({
				el: document.getElementsByClassName('page-wrapper')[0],
			});
			this._component.init().then(() => {
				this.onInit();
			});
		});
	}

	initData() {
		console.log('HomepageContainer:initData');
		// const list = {
		// 	default_landing: false,
		// };

		// this.data.cities.forEach((key, value) => {
		// 	list[key.id] = false;
		// });

		// this.dispatch(setIntroListHomepage(list));

		super.initData();
	}
}

export default HomepageContainer;
