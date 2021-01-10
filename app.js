const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      contacts = require('./modules/contacts'),
      http = require('http'),
      url = require('url'),
      app = express();

app.get('/contacts', 
		function(request, response){
			var get_params = url.parse(request.url, true).query;	
			
			if (Object.keys(get_params).length === 0)
			{
				response.setHeader('content-type', 'application/json');
				response.end(JSON.stringify(contacts.list()));	
			}
			else
			{
				response.setHeader('content-type', 'application/json');
				response.end(JSON.stringify(contacts.query_by_arg(get_params.arg, get_params.value)));
			}
		}
);


app.get('/contacts/:number', function(request, response) {
	response.setHeader('content-type', 'application/json');	
	response.end(JSON.stringify(contacts.query(request.params.number)));
});

app.get('/groups', function(request, response) {
	console.log ('groups');
	response.setHeader('content-type', 'application/json');	
	response.end(JSON.stringify(contacts.list_groups()));
});

app.get('/groups/:name', function(request, response) {
	console.log ('groups');
	response.setHeader('content-type', 'application/json');	
	response.end(JSON.stringify(contacts.get_members(request.params.name)));
});
	

http.createServer(app).listen(8180, function(){
  console.log('Express server listening on port 8180');  
});