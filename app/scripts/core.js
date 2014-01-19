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
	getMessages();
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
	});
});
function getMessages () { 
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
}