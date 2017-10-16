/* global Backbone _ */

class PageModel extends Backbone.Model {

	constructor(options = {}) {

		_.defaults(options, {
			asyncronous: true,
			urlRoot : '/assets/jsons/'
		});

		super(options);
	}

	initialize(options) {
        // Example here of dynamic JSON
		this.url = options.url ? options.urlRoot + options.url : '';
	}
}

export default PageModel;
