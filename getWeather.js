var http = require("http");
var printer = require("./printer");

function get(url) {
	var request = http.get(url, function(response) {
		var responseBody = "";

		response.on("data", function(chunk) {
			responseBody += chunk;
		});

		response.on("end", function() {
			if(response.statusCode === 200) {
				try {
					var weatherJSON = JSON.parse(responseBody);
					printer.printMessage(weatherJSON.name, weatherJSON.main.temp, weatherJSON.weather[0].main);
				} catch(error) {
					printer.printError;
				}
			} else {
				printer.printError({message: "There was an error fetching the data for that zip code."  + "[" + http.STATUS_CODES[response.statusCode] + "]"});
			}
		});
	});

	request.on("error", printer.printError);
}

module.exports.get = get;