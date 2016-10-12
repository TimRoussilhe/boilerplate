/* global  _   */

var PageView  			= require('abstract/pageView');
var template 			= require('templates/about.hbs');
var AboutDatas 		= require('jsons/about.json')

//TODO clean datas flow here
var AboutView = function(options, datas) {
	this.template = template;

	var datasParam = AboutDatas;

	PageView.call(this, options, datasParam);
};

_.extend(AboutView, PageView);
_.extend(AboutView.prototype, PageView.prototype);

AboutView.prototype.initDOM = function() {

	PageView.prototype.initDOM.call(this);
};

AboutView.prototype.setupDOM = function() {

};

AboutView.prototype.onResize = function() {

};

module.exports = AboutView;
