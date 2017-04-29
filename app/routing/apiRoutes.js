var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	app.post("/api/friends", function(req, res) {
		// Have this section for when survey.html is complete, and should be able to calculate a good match. 
	}})
}