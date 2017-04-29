// Dependencies and Global Variables
var friends = require("../data/friends");
var totalDiff = 50;
var diff = 0;
var friendMeter = [];
var match;

// Prototype for finding lowest number in array
Array.prototype.min = function() {
	return Math.min.apply(null, this);
}

// Calls under (for getting requests/results)
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	app.post("/api/friends", function(req, res) {
		

		// Make a for-loop that will go through however many entries are in friends array, and then have it compare its score 
		// For calulcating absolute values: https://blog.udemy.com/javascript-absolute-value/
		// For finding lowest number: http://stackoverflow.com/questions/1669190/javascript-min-max-array-values
		for (var i = 0; i < friends.length; i++) {
			totalDiff = 50;
			diff = 0;

			for (var x = 0; x < friends[i].charInfo.length; x++) {
				diff += Math.abs(parseInt(req.body.charInfo[x]) - parseInt(friends[i].charInfo[x]));
				
			}
			// Goes through loop, and adds anything that at least fits the bare minimum in difference.
			if (diff < totalDiff) {
				friendMeter.push(diff);
			}
		}
			// Should show the entire array.
			console.log("End of Listing: "+friendMeter)

			// Should help find lowest integer in array thanks to prototype in line 9 (4/29/17), and then find the index of the lowest integer.
			var test = friendMeter.indexOf(friendMeter.min())

			// Gets the lowest integer's index location to input into the response.
			console.log("Lowest is in the indexOf: "+test)

			// Should pick an object within the array based on the index of the lowest integer for differences.
			res.json(friends[test])

			// Clear array so it won't have duplicate records.
			friendMeter = [];
		

		// Push the data inputted from survey into the array.
		friends.push(req.body);
	});
}
