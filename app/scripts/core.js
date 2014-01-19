// Mitigate the purpose...
var parseApplicationId = '1pfoAtpal7tFGlDjYeLXHQ4v7UlOTBAEM53JtRJY',
	parseJavaScriptKey = 'qtXKYxUWkrA68H2XWpl92IWgdOUyArXcZkanic2j',
	parseRestKey = 'Z3BTiznfSu4zTtW4vofTpirJNNcD81VP7uLAPhwE';
Parse.initialize(parseApplicationId, parseJavaScriptKey);
$(function () {
	/*var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});*/
	/*var GameMaster, gameMaster;
	GameMaster = Parse.Object.extend('GameMasterTest');
	gameMaster = new GameMaster();
	gameMaster.save({
		name: 'Game Master',
		slogan: 'Prototypical Entertainment Networking'
	}, {
		success: function (object) {
			console.log('This Parse object was saved... ' + object);
		},
		error: function (object) {
			console.log('Error... ' + object);
		}
	});*/
	// Backbone.js Example...
	var userData = [
		{
			name: 'poplinr',
			age: 23
		},
		{
			name: 'vredesbyrdann',
			age: 23
		}
	];
	// Core Router...
	// Query String Param Access...
	var app;
	var router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'users/:userName': 'loadUser'
		},
		initialize: function () {
			// An instance of the Users Collection...
			var users = new Users();
			//...
			users.reset(userData);
			this.homeView = new homeView({collection: users});
			this.userView = new userView({collection: users});
		},
		home: function () {
			this.homeView.render();
		},
		loadUser: function (userName) {
			this.userView.render(userName);
		}
	});
	// homeView View...
	var homeView = Backbone.View.extend({
		el: 'body',
		template: _.template('User Data: <%= data %>'),
		render: function () {
			this.$el.html(this.template({
				data: JSON.stringify(this.collection.models)
			}));
		}
		// subviews...
	});
	// Users Collection...
	var Users = Backbone.Collection.extend({});
	// userView View...
	var userView = Backbone.View.extend({
		template: _.template('<div>'  
				+ '<h2><%= attributes.name %></h2>' 
				+ '<span><%= attributes.age %></span>' 
			+ '</div>'),
		render: function (userName) {
			var userModel = this.collection.where({name:userName})[0];
			var userHtml = this.template(userModel);
			$('body').html(userHtml);
		}	
	});	
	app = new router;
	Backbone.history.start();
	// Chat Room Example Testing...
	// Invoke getMessages();	
	/*getMessages();
	$('#send').click(function () {
		var username, message;
		// Replace .attr('value') with .val()...
		username = $('input[name=username]').val();
		message = $('input[name=message]').val();
		console.log(username, message);
		$.ajax({
			url: 'https://api.parse.com/1/classes/MessageBoard',
			headers: {
				'X-Parse-Application-Id': '1pfoAtpal7tFGlDjYeLXHQ4v7UlOTBAEM53JtRJY',
				'X-Parse-REST-API-Key': parseRestKey
			},
			contentType: 'application/json',
			dataType: 'json',
			processData: false,
			data: JSON.stringify({
				'username': username,
				'message': message
			}),
			type: 'POST',
			success: function () {
				console.log('Data was sent...');
				getMessages();
			},
			error: function () {
				console.log('An error has occured...');
			}
		});
	});*/
/*function getMessages () { 
	$.ajax({
		url: 'https://api.parse.com/1/classes/MessageBoard',
		headers: {
			'X-Parse-Application-Id': '1pfoAtpal7tFGlDjYeLXHQ4v7UlOTBAEM53JtRJY',
			'X-Parse-REST-API-Key': parseRestKey
		},
		contentType: 'application/json',
		dataType: 'json',
		type: 'GET',
		success: function (data) {
			console.log('get');
			updateView(data);
		},
		error: function () {
			console.log('Error...');
		}
	});
}
function updateView(messages) {
	var table;
	table = $('.table tbody');
	table.html('');
	$.each(messages.results, function (index, value) {
		var trEL;
		trEl = $('<tr><td>'
			    + value.username
			    + '</td><td>'
			    + value.message +
			    '</td></tr>');
		table.append(trEl);
	});
	console.log(messages);
}*/
});