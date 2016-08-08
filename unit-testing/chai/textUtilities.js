var expect = require('chai').expect;


function titleCase(title) {    
    var words = title.split(' ');
    var titleCasedWords = words.map(function(word) {
        if (word == 'the' || word == 'of') { 
            return word.toLowerCase();
        } else {
            return word[0].toUpperCase() + word.substring(1);
        }
    });  
    
    return titleCasedWords.join(' ');    
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('lord of the rings')).to.equal('Lord of the Rings');