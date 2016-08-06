//Problem: We need to return the astronomy picture of the day when a user enters a date in the search field
//Solution: Use Node.js to connect to the APOD API to return the astropic of the day that the user has searched

var https = require('https');
var http = require('http');
var EventEmitter = require("events").EventEmitter;
var util = require("util");

/**
 * An EventEmitter astronomy picture of the day
 * @param date
 * @constructor
 */

//Print out error messages
function printError(error) {
    console.error(error.message);
}

function getAstroPic(date) {    
    
    EventEmitter.call(this);

    apodEmitter = this;

    //Connect to the API URL (http://opendata/download-metfcst.smhi.se)
    var request = https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + date, function(response) {
        
        var body = '';
        
        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            apodEmitter.emit("error", new Error("There was an error getting the picture for " + date + ". (" + response.statusCode + ")"));
        }
        
        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            console.log(body);
            apodEmitter.emit("data", chunk);
        });

        
        response.on('end', function() {
            if (response.statusCode === 200) {
                try {
                    //Parse the data
                    var pictureContent = JSON.parse(body);
                    console.log(pictureContent);
                    //Print the data
                    apodEmitter.emit('end', pictureContent);
                } catch(error) {
                    //Parse Error
                    apodEmitter.emii('error', error);
                }
            } 
        }).on('error', function(error) {
            apodEmitter.emii('error', error);
        });
        
    }); //end request

}


util.inherits( getAstroPic, EventEmitter );
module.exports = getAstroPic;