//version : 0.0.1
//usage  : checking widget creation

/*
//defining module
define([],function(){
	//returning the Custom Widget
	//example : declare('myWidget',[dijit._WidgetBase],{})
	return declare('wigetName',[],{});
});
*/

define(['dojo/_base/declare','dijit/_WidgetBase'],
	function(declare,_WidgetBase){
		return declare('myWidget.RayWidget',[_WidgetBase],{
			//lc : 1
			constructor : function(){
				this.inherited(arguments);//super class call
				console.log('rayWidget : constructor : 1');
			},
			//lc : 2
			postMixInProperties : function(){
				this.inherited(arguments);
				console.log('rayWidget : postMixInProperties : 2');
			},
			//lc : 3
			buildRendering : function(){
				this.inherited(arguments);
				console.log('rayWidget : buildRendering : 3');
			},
			//lc : 4.1
			//setters & getters
			//lc : 5
			postCreate : function(){
				this.inherited(arguments);
				console.log('rayWidget : postCreate : 5');
			},
			//lc : 6
			startup : function(){
				this.inherited(arguments);
				console.log('rayWidget : startup : 6');
			},
			//lc : 7
			destroy : function(){
				this.inherited(arguments);
				console.log('rayWidget : destroy : 7');
			},
			//lc : 
			resize : function(){
				this.inherited(arguments);
				console.log('rayWidget : resize');
			}
		});
	});