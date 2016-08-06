var unsecurePlainTextPassword = 'angelica';
var bcrypt = require('bcrypt');
var colors = require('colors');
//hashing a password
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
        console.log(hash.yellow);
        
        bcrypt.compare(unsecurePlainTextPassword, hash, function(err, res) {
            // res == true 
            console.log(res);
        });
    });
    
    
});


