/* global  _ TweenMax Cubic TimelineMax  */

var PageView  			= require('abstract/pageView');
var template 			= require('templates/index.hbs');
var CV 					= require('config/currentValues');
var HomepageDatas 		= require('jsons/index.json')	

var IndexView = function(options, datas) {
	this.template = template;

	var datasParam = HomepageDatas;

	PageView.call(this, options, datasParam);
};

_.extend(IndexView, PageView);
_.extend(IndexView.prototype, PageView.prototype);

IndexView.prototype.initDOM = function() {
	
	PageView.prototype.initDOM.call(this);
};

IndexView.prototype.setupDOM = function() {
	
};

IndexView.prototype.onResize = function() {

};

module.exports = IndexView;
