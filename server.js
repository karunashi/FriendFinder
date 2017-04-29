// Dependencies. Might remove !!Path!! and place it in the htmlRoutes since it seems to make more sense.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 9001;

// Body-Parser here so I can get everything to interpret, since we're going to need it for all the data transactions.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing everything together so I can make the web application properly function as intended.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listen so I can see if it works on my CLI as well (the console log).
app.listen(PORT, function(){
	console.log("Listening to Port: "+PORT);
});