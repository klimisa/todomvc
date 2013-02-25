(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!

	//Define a todo
	var todo = kendo.data.Model.define({
		fields: {
	        'title': {
	            type: 'string'
	        },
	        'completed': {
	            type: 'boolean'
	        },
	        'editing': {
	            type: 'boolean'
	        }
	    }
	});

	var viewModel = kendo.observable({
		newtodo: '',
		todos: [],
		addtodo: function () {
			var current =  this.get('newtodo').trim();
			if ( current ) {
				todos.push( new todo({title: current, completed: false, editing: false }) );
				current.set('');
			}
		}
	});

	kendo.bind($('#todoapp'), viewModel);

	//viewModel.todos = [new todo({title: 'xxx', completed: false, editing:false })];

})( window );
