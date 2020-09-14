// Add DOM event listener to our file
document.addEventListener('DOMContentLoaded', () => {

  let currentPlayer = 1;

  let boardValues = ['', '', '', '', '', '', '', '', ''];

  const handleSquareClick = (clickedSquareEvent) => {
    // alert('square clicked');

    const clickedSquare = clickedSquareEvent.target;

    const clickedSquareIndex = clickedSquare.id;

    let currentBoardValue = boardValues[clickedSquareIndex]

    if (currentBoardValue === '') {

      if (currentPlayer === 1) {
        document.getElementById(clickedSquareIndex).innerHTML = 'X';
        currentPlayer = 0;
      } else {
        document.getElementById(clickedSquareIndex).innerHTML = 'O';
        currentPlayer = 1;
      }
    }
  }


  // return a NodeList of all squares inside div with class 'board', with an event click listener on each square
  document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handleSquareClick));



})
