import AbstractPageContainer from 'abstract/Pagecontainer';
import Homepage from 'components/about/About';
// actions
// import {setIntroListHomepage} from './actions';

class AboutContainer extends AbstractPageContainer {

	constructor(options) {
		super(options);

		this.Component = Homepage;

	}

	initData() {
		console.log('AboutContainer:initData');
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

export default AboutContainer;
