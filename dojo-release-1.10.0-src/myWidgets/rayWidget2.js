define([
	'dojo/_base/declare',
	'dijit/_WidgetBase'],
	function(declare,_WidgetBase){
		//module : myWidget/RayWidget2
		//var RayWidget2 = declare('',[],{});

		//Below 'declare' defines, what should be provided in HTML based widget creation
		//Example : <span data-dojo-type="myWidget.RayWidget2">hi</span>
		var RayWidget2 = declare('myWidget.RayWidget2',[_WidgetBase],{
			constructor : function(){
				this.inherited(arguments);
				console.log('RayWidget2 : constructor');
			},
			postMixInProperties : function(){
				this.inherited(arguments);
				console.log('RayWidget2 : postMixInProperties');
			},
			buildRendering : function(){
				this.inherited(arguments);
				console.log('RayWidget2 : buildRendering');
			},
			postCreate : function(){
				this.inherited(arguments);
				console.log('RayWidget2 : postCreate');
			},
			startup : function(){
				this.inherited(arguments);
				console.log('RayWidget2 : startup');
			},
			destroy : function(){
				this.inherited(arguments);
				console.log('RayWidget2 : destroy : 7');
			},
			//lc : 
			resize : function(){
				this.inherited(arguments);
				console.log('RayWidget2 : resize');
			},
		});
		return RayWidget2;
	});