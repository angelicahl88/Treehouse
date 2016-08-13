'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/hyphenated-string$/.test(strToSearch)); //test string w regular experssions

console.log(strToSearch.indexOf('hyphenated-string') === strToSearch.length - 'hyphenated-string'.length); //indexOf

console.log(strToSearch.endsWith('hyphenated-string'));    //endsWith