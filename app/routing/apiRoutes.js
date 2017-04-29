var friends = require("../data/friends");
var totalDiff = 50;
var diff = 0;
var friendMeter = [];
var match;

Array.prototype.min = function() {
	return Math.min.apply(null, this);
}

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	app.post("/api/friends", function(req, res) {
		console.log("Test1: " + req.body.charInfo);
		console.log("Test2: "+friends)
		
		

		// Make a for-loop that will go through however many entries are in friends array, and then have it compare its score 
		// For calulcating absolute values: https://blog.udemy.com/javascript-absolute-value/
		for (var i = 0; i < friends.length; i++) {
			totalDiff = 50;
			diff = 0;

			for (var x = 0; x < friends[i].charInfo.length; x++) {
				diff += Math.abs(parseInt(req.body.charInfo[x]) - parseInt(friends[i].charInfo[x]));
				// console.log(diff);
			}
			// console.log(diff);
			if (diff < totalDiff) {
				friendMeter.push(diff);
				// console.log(friendMeter);

			}
			console.log("Testing Ping")
		}
			console.log("End of Listing: "+friendMeter)

			var test = friendMeter.indexOf(friendMeter.min())
			console.log("Lowest is in the indexOf: "+test)
			res.json(friends[test])
			friendMeter = [];
		
		friends.push(req.body);
	});
}
