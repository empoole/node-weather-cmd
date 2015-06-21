//Weather data from http://openweathermap.org
var getWeather = require("./getWeather");
var zipcode = "",
	country = "";

var url = "http://api.openweathermap.org/data/2.5/weather?zip=";
zipcode = process.argv.slice(2,3);
country = process.argv.slice(3,4);

url += zipcode + "," + country;

getWeather.get(url);