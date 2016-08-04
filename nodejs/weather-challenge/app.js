var weather = require("./weather.js");

var location = {
    name: 'Stockholm',
    lat: 59.3293,
    lon: 18.0686
};

weather.get(location);