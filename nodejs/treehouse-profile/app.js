var profile = require("./profile.js");
var users = process.argv.slice(2);
//var users = ['geoshepherds', 'chalkers', 'davemcfarland'];

users.forEach(profile.get);