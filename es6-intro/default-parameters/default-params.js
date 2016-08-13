'use strict';

function greet(name = 'Beeds', timeOfDay = 'Day') {
    
    console.log(`Good ${timeOfDay}, ${name}!`);
}

greet(undefined, 'Evening');
