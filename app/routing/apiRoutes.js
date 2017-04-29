var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	app.post("/api/friends", function(req, res) {
		console.log("Test1: " + req.body.charInfo);
		console.log("Test2: "+ res);
		// Have this section for when survey.html is complete, and should be able to calculate a good match. 
	});
}