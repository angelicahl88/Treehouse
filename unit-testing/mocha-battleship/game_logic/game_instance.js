var fireAtShip = require('./ship_methods.js').fireAtShip;

function checkGameStatus(players) {
    return false;
}

function takeTurn(opposingPlayer, guessFunction) {
    var coordinates = guessFunction();
    fireAtShip(opposingPlayer, coordinates);
    var gameOver = checkGameStatus();
    
    return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;