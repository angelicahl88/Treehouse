'use strict';

function myFunction(name, iceCreamFlavour) {
    console.log(`${name} really likes ${iceCreamFlavour} ice cream.`);
}

let args = ['Gabe', 'Vanilla'];
myFunction(...args);