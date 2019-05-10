//play function
function play() {
    document.getElementById('start').setAttribute('class', 'hidden');
    document.getElementById('rules').setAttribute('class', 'hidden');
    init();
    placeShips1();
}
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
    //render();
    console.log('up and running');
}
//create ship class
class Ship {
    constructor(name, shipLength, hitLocs, isSunk, numHits) {
        this.name = name;
        this.shipLength = shipLength;
        this.hitLocs = hitLocs;
        this.isSunk = isSunk;
        this.numHits = numHits;
    }
}
//create ships
    var ship1 = new Ship("Battleship", 4, [], false, 4);
    var ship2 = new Ship("Submarine", 3, [], false, 0);
    var ship3 = new Ship("Destroyer", 2, [], false, 0);

    var ship4 = new Ship("Battleship", 4, [], false, 0);
    var ship5 = new Ship("Submarine", 3, [], false, 0);
    var ship6 = new Ship("Destroyer", 2, [], false, 0);

//place ships
function placeShips1() {
    document.getElementById('msgEl').textContent = "Player 1: Please place your ships on Player 2's board...Press the Battleship logo when finished";
    document.getElementById('ship1').setAttribute('class', '');
    document.getElementById('ship2').setAttribute('class', '');
    document.getElementById('ship3').setAttribute('class', '');
    document.getElementById('title').addEventListener('click', placeShips2);
}
function placeShips2() {
    document.getElementById('msgEl').textContent = "Player 2: Please place your ships on Player 1's board...Press the Battleship logo when finished, and then Fire!";
//hide player1 ships
document.getElementById('ship1').setAttribute('class', 'hideShips');
document.getElementById('ship2').setAttribute('class', 'hideShips');
document.getElementById('ship3').setAttribute('class', 'hideShips');
//show player2 ships
document.getElementById('ship4').setAttribute('class', '');
document.getElementById('ship5').setAttribute('class', '');
document.getElementById('ship6').setAttribute('class', '');
document.getElementById('title').addEventListener('click', hideShips);

}

function hideShips() {

    document.getElementById('ship4').setAttribute('class', 'hideShips');
document.getElementById('ship5').setAttribute('class', 'hideShips');
document.getElementById('ship6').setAttribute('class', 'hideShips');

checkForWin();

}



let player1Hits = 0;
let player2Hits = 0;
let player1Misses = 0;
let player2Misses = 0;

 //check for a winner
  function checkForWin() {

 

 if (player2Hits === 12) {
     document.getElementById('msgEl').textContent = 'Player 2 Wins!!!';
     
    console.log('Player 2 Wins!!!');
 }  
 else if (player1Hits === 12) {
     document.getElementById('msgEl').textContent = 'Player 1 Wins!!!';
     
    console.log('Player 1 Wins!!!');
}  

}
//event listeners for fire() function / game start & rules
document.getElementById('board1')
.addEventListener('click', fire);

document.getElementById('board2')
.addEventListener('click', fire);

document.getElementById('start')
.addEventListener('click', play);

document.getElementById('rules')
.addEventListener('click', rules);




//attack function
function fire(evt) {
    const marker = evt.target.getAttribute('id');
    console.log(marker);
    turn *= -1;
    if (board1[marker] === 0) {
        console.log('miss');
        evt.target.setAttribute('class', 'miss');
        document.getElementById('msgEl').textContent = "Miss...";
    
    }
   else if (board1[marker] === 1) {
        console.log('hit!');
        evt.target.setAttribute('class', 'hit');
        document.getElementById('msgEl').textContent = "Hit!"
        player1Hits += 1;

    }
    else if (board2[marker - 36]  === 0) {
        console.log('miss');
        evt.target.setAttribute('class', 'miss');
        document.getElementById('msgEl').textContent = "Miss...";
    
    }
    else if (board2[marker - 36]  === 1) {
        player2Hits += 1;
        console.log('hit!');
        evt.target.setAttribute('class', 'hit');
        document.getElementById('msgEl').textContent = "Hit!"
        
    }
    
    checkForWin();


}


function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    let startCell = parseInt(ev.target.id);
    let shipLength = startCell + 4

    for (let i = startCell; i < shipLength; i++) {
        board1[i] = 1;
    }
  }

  
  //FIX DROP FUNCTION TO ONLY DROP ON CURRENT PLAYER BOARD (OPPOSING SIDE) & ONLY IN NON-OCCUPIED SPACES
  //TURN FUNCTION TO ONLY ALLOW CURRENT PLAYER TO FIRE ONLY AT OPPONENTS BOARD
  //FIX WIN LOGIC
  //ICEBOX ITEMS
