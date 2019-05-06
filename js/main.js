//initialize game boards
function init() {
board1 =    [0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0];

board2 =    [0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0];         

    winner = null;
    turn = 1;
    render();
}
//create ship class
class Ship {
    constructor(name, length, hitLocs, isSunk, numHits) {
        this.name = name;
        this.length = length;
        this.hitLocs = hitLocs;
        this.isSunk = isSunk;
        this.numHits = numHits;
    }
}
//create ships
    var ship1 = new Ship("Battleship", 4, ["", "", "", ""], false, 0);
    var ship2 = new Ship("Submarine", 3, ["", "", ""], false, 0);
    var ship3 = new Ship("Destroyer", 2, ["", ""], false, 9);

    var ship4 = new Ship("Battleship", 4, ["", "", "", ""], false, 0);
    var ship5 = new Ship("Submarine", 3, ["", "", ""], false, 0);
    var ship6 = new Ship("Destroyer", 2, ["", ""], false, 0);
//check for a winner
  function checkForWin() {
 if (ship1.numHits + ship2.numHits + ship3.numHits === 9) {
     document.getElementById('msgEl').textContent = 'Player 2 Wins!!!';
     document.getElementById('msgEl').setAttribute('behavior', 'alternate');
    console.log('Player 2 Wins!!!');
 }  
 else if (ship4.numHits + ship5.numHits + ship6.numHits === 9) {
     document.getElementById('msgEl').textContent = 'Player 1 Wins!!!';
     document.getElementById('msgEl').setAttribute('behavior', 'alternate');
    console.log('Player 1 Wins!!!');
}  
}
//event listeners for eventual fire() function
document.getElementById('board1')
.addEventListener('click', handleClick);

document.getElementById('board2')
.addEventListener('click', handleClick);

function handleClick(evt) {
    const marker = evt.target.getAttribute('id');
    console.log(marker);

}