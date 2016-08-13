'use strict';

function myFunction(name, ...params) {
    console.log(name, params);
}

myFunction('beeds', 3, 4, 5, false, 'hello');