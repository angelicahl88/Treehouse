//Problem: We need to return the forcasted temperature and wind speed of a given location
//Solution: Use Node.js to connect to the SMHI API to return the weather of the chose location and print out

var http = require('http');

//Print out message
function printMessage(locationName, temperature, windSpeed) {
    var message = locationName + ' has a temperature of ' + temperature + ' degrees Celsius and a wind speed of ' + windSpeed + ' m/s.'
    console.log(message);
}

//Print out error messages
function printError(error) {
    console.error(error.message);
}

function getForecast(location) {
    var locationName = location.name,
        longitude = location.lon,
        latitude = location.lat;
    
    
    //Connect to the API URL (http://opendata/download-metfcst.smhi.se)
    var request = http.get('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/' + longitude + '/lat/' + latitude +'/data.json', function(response) {
        
        var body = '';
        response.on('data', function(chunk){
            body += chunk;
        });
        
        response.on('end', function() {
            if (response.statusCode === 200) {
                try {
                    //Parse the data
                    var forecast = JSON.parse(body);
                    var temperature = forecast.timeSeries[0].parameters[1].values[0];
                    var windSpeed = forecast.timeSeries[0].parameters[4].values[0];
                    //Print the data
                    printMessage(locationName, temperature, windSpeed);
                } catch(error) {
                    //Parse Error
                    printError(error);
                }
            } else {
                //Status Code Error
                printError({message: "There was an error getting the forecast for " + locationName + ". (" + response.statusCode + ")"});
            }
        });
    });

    //Connection Error
    request.on('error', printError);
}



module.exports.get = getForecast;