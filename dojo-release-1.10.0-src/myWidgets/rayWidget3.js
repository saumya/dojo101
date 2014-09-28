define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin'],
	function(declare,_WidgetBase,_TemplatedMixin){
		//module : myWidget/RayWidget3
		//var RayWidget3 = declare('',[],{});

		//Below 'declare' defines, what should be provided in HTML based widget creation
		//Example : <span data-dojo-type="myWidget.RayWidget3">hi</span>
		var RayWidget3 = declare('myWidget.RayWidget3',[_WidgetBase,_TemplatedMixin],{
			templateString : "<div>Whoa! _TemplatedMixin acting now. <div data-dojo-attach-point='titleNode'>::${!baseClass}:: ${!nickName}</div></div>",
			//property
			nickName : null,
			//methods
			constructor : function(){
				this.inherited(arguments);
				console.log('RayWidget3 : constructor');
				this.nickName = 'Saumya\'s node';
			},
			postMixInProperties : function(){
				this.inherited(arguments);
				console.log('RayWidget3 : postMixInProperties');
				console.log(this.domNode);//Not available here
			},
			buildRendering : function(){
				this.inherited(arguments);
				console.log('RayWidget3 : buildRendering');
				console.log(this.domNode);//Available from here on afterwards
				console.log(this.titleNode);//data-dojo-attach-point exposes template parts to refer to directly
			},
			postCreate : function(){
				this.inherited(arguments);
				console.log('RayWidget3 : postCreate');
			},
			startup : function(){
				this.inherited(arguments);
				console.log('RayWidget3 : startup');
			},
			destroy : function(){
				this.inherited(arguments);
				console.log('RayWidget3 : destroy : 7');
			},
			//lc : 
			resize : function(){
				this.inherited(arguments);
				console.log('RayWidget3 : resize');
			},
		});
		return RayWidget3;
	});