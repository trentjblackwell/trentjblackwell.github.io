class Ship {
    constructor(name, length, hitLocs, isSunk, numHits) {
        this.name = name;
        this.length = length;
        this.hitLocs = hitLocs;
        this.isSunk = isSunk;
        this.numHits = numHits;
    }
}
    var ship1 = new Ship("Battleship", 4, ["", "", "", ""], false, 0);
    var ship2 = new Ship("Submarine", 3, ["", "", ""], false, 0);
    var ship3 = new Ship("Destroyer", 2, ["", ""], false, 9);

    var ship4 = new Ship("Battleship", 4, ["", "", "", ""], false, 0);
    var ship5 = new Ship("Submarine", 3, ["", "", ""], false, 0);
    var ship6 = new Ship("Destroyer", 2, ["", ""], false, 0);


///const msgEl = document.getElementById('msgEl');
  
function checkForWin() {
 if (ship1.numHits + ship2.numHits + ship3.numHits === 9) {
     //var msg = document.getElementsByClassName('msgEl').textContent('Player 2 Wins!!!');
     document.getElementById('msgEl').textContent = 'Player 2 Wins!!!';
     document.getElementById('msgEl').setAttribute('behavior', 'alternate');
    console.log('Player 2 Wins!!!');
 }  
 else if (ship4.numHits + ship5.numHits + ship6.numHits === 9) {
    
    console.log('Player 1 Wins!!!');
}  
}

function player1fire(target) {
    document.getElementById('board2').addEventListener('click', handleClick);
    
}