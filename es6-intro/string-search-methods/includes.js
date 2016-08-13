'use strict';

let strToSearch = 'a-really-long-hypheanted-string';

console.log(/long/.test(strToSearch)); //test string w regular experssions

console.log(strToSearch.indexOf('long') > -1); //indexOf

console.log(strToSearch.includes('long'));    //includes