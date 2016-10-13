/* global  _   */

var PageView  		= require('abstract/pageView');
var template 			= require('templates/404.hbs');
var ErrorDatas 		= require('jsons/404.json');

var ErrorView = function(options, datas) {

	this.template = template;

	var datasParam = ErrorDatas;

	PageView.call(this, options, datasParam);

};

_.extend(ErrorView, PageView);
_.extend(ErrorView.prototype, PageView.prototype);

ErrorView.prototype.initDOM = function() {

	PageView.prototype.initDOM.call(this);

};

ErrorView.prototype.setupDOM = function() {

};

ErrorView.prototype.onResize = function() {

};

module.exports = ErrorView;
