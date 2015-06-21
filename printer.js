//Print error messages
function printError(error) {
	console.error(error.message);
}


//print messages
function printMessage(town, temperature, weather) {
	temperature = Math.floor(temperature*(9/5) - 459.67);
	var output = "The weather in " + town + " is " + weather + ". The temperature is " + temperature + " degrees Fahrenheit.";
	/*
	if(tempUnits == "F") {
		output += tempToFahrenheit(temperature) + " degrees Fahrenheit.";
	} else if (tempUnits == "C") {
		output += tempToCelcius(temperature) + " degrees Celcius.";
	}
	*/
	console.log(output);
}

//Convert Temperatures
function tempToFahrenheit(temp) {
	return Math.floor((temp*(9/5)) - 459.67);
}

function tempToCelcius(temp) {
	return Math.floor(temp - 273.15);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;