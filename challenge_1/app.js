// Add DOM event listener to our file
document.addEventListener('DOMContentLoaded', () => {


  var gameState = {
    currentPlayer: 1,
    gameActive: true,
    isDraw: false
  }



  const handleSquareClick = (clickedSquareEvent) => {

    const clickedSquare = clickedSquareEvent.target;

    const clickedSquareIndex = clickedSquare.id;

    let currentBoardValue = boardValues[clickedSquareIndex];

    if (currentBoardValue === '' && gameState.gameActive) {
      handleSquareChange(currentBoardValue, clickedSquareIndex, clickedSquare);
    } else {
      return;
    }
    handleGameResult(clickedSquareIndex);
  }

  const handleSquareChange = (currentBoardValue, clickedSquareIndex, clickedSquare) => {
    if (gameState.currentPlayer === 1) {
      document.getElementById(clickedSquareIndex).innerHTML = 'X';
      boardValues[clickedSquareIndex] = 'X';
      gameState.currentPlayer = 0;
    } else {
      document.getElementById(clickedSquareIndex).innerHTML = 'O';
      boardValues[clickedSquareIndex] = 'O';
      gameState.currentPlayer = 1;
    }
  }
  let boardValues = ['', '', '',
    '', '', '',
    '', '', ''];
// create array of possible winning indexes if the index all have the same value in them
  const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const handleGameResult = (clickedSquareIndex) => {
    var haveWinner = false;
    possibleWins.forEach((winCombo) => {
      var first = boardValues[winCombo[0]];
      var second = boardValues[winCombo[1]];
      var third = boardValues[winCombo[2]];
      console.log('first: ', first);
      console.log('second: ', second);
      console.log('third ', third);
      if (first === '' || second === '' || third === '') {
        return;
      }
      if (first === second && second === third) {
        haveWinner = true;
        return;
      }
    })
    if (haveWinner) {
      currentWinner = document.getElementById(clickedSquareIndex).innerHTML;
      gameState.gameActive = false;
      alert(`The winner is Player ${currentWinner}!!`)
    }
    if (gameState.gameActive && !boardValues.includes('')) {
      gameState.isDraw = true;
      alert('The game has ended in a draw');
    }
  }

  const resetGame = () => {

    console.log(document.getElementsByClassName('square'));
    const elementArray = document.getElementsByClassName('square');
    for (var index in elementArray) {
      elementArray[index].innerHTML = '';
    }
    gameState.gameActive = true;
    gameState.currentPlayer = 1;
    return;
  }
  // return a NodeList of all squares inside div with class 'board', with an event click listener on each square
  document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handleSquareClick));
  // event listener to reset game if button clicked
  document.getElementById('myBtn').addEventListener("click", resetGame);
})
