var astroPic = require("./astropic.js");
var renderer = require("./renderer.js");
var queryString = require("querystring");

var commonHeader = {'Content-Type': 'text/html'};


//Handle HTTP route GET / and POST / i.e. Home
function search(request, response) {
    //if url === '/' && GET
    if(request.url === '/') {
        if(request.method.toLowerCase() === 'get') {
            //show search
            response.writeHead(200, commonHeader);
            renderer.view('header', {}, response);
            renderer.view('search', {}, response);
            renderer.view('footer', {}, response);
            response.end();
        } else {
            //if url === '/' && POST 

            //get the post data from body
            request.on('data', function(postBody) {
                //extract the username
                var query = queryString.parse(postBody.toString());
                console.log(query);
                //redirect to /:username
                response.writeHead(303, {"Location": "/" + query.dateSearch});
                response.end();
            });
        }
    } 
    
}

//Handle HTTP route GET /:username i.e. /chalkers
function result(request, response) {
    //if url === '/...'
    var date = request.url.replace('/', '');
    if (date.length > 0) {
        response.writeHead(200, commonHeader);
        renderer.view('header', {}, response);
        
        
        //get JSON from treehouse
        var picOfTheDay = new astroPic(date);
            //on 'end'
            picOfTheDay.on('end', function(picJSON) {
                //show profile
                
                //store the values which we need
                var values = {
                    explanation: picJSON.explanation,
                    picUrl: picJSON.url,
                    title: picJSON.title,
                    date: picJSON.date
                }
                //simple response
                renderer.view('apod', values, response);
                renderer.view('footer', {}, response);
                response.end();
                
            });
            //on 'error'
            picOfTheDay.on('error', function(error) {
                //show error
                renderer.view('error', {errorMessage: error.message}, response);
                renderer.view('search', {}, response);
                renderer.view('footer', {}, response);
                response.end();
            });
            
            
    }
}

module.exports.search = search;
module.exports.result = result;