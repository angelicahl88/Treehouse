'use strict';

let strToSearch = 'a-really-long-hypheanted-string';

console.log(/^a-really/.test(strToSearch)); //test string w regular experssions

console.log(strToSearch.indexOf('a-really') === 0); //indexOf

console.log(strToSearch.startsWith('a-really'));    //startsWith