// Add DOM event listener to our file
document.addEventListener('DOMContentLoaded', () => {

  var gameState = {
    currentPlayer: 1,
    gameActive: true,
  }

  let boardValues = ['', '', '',
    '', '', '',
    '', '', ''];

  const handleSquareClick = (clickedSquareEvent) => {

    const clickedSquare = clickedSquareEvent.target;

    const clickedSquareIndex = clickedSquare.id;

    let currentBoardValue = boardValues[clickedSquareIndex];

    if (currentBoardValue === '' && gameState.gameActive) {
      handleSquareChange(currentBoardValue, clickedSquareIndex, clickedSquare);
    } else {
      handleGameResult(gameState.gameActive);
    }
  }

  const handleSquareChange = (currentBoardValue, clickedSquareIndex, clickedSquare) => {
    console.log(currentBoardValue);
    console.log(clickedSquareIndex);
    if (gameState.currentPlayer === 1) {
      document.getElementById(clickedSquareIndex).innerHTML = 'X';
      currentBoardValue[clickedSquareIndex] = 'X';
      boardValues[clickedSquareIndex] = 'X';
      gameState.currentPlayer = 0;
    } else {
      document.getElementById(clickedSquareIndex).innerHTML = 'O';
      currentBoardValue[clickedSquareIndex] = 'O';
      boardValues[clickedSquareIndex] = 'O';
      gameState.currentPlayer = 1;
    }
  }

  const handleGameResult = (isActive) => {

  }


  // return a NodeList of all squares inside div with class 'board', with an event click listener on each square
  document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handleSquareClick));

})
