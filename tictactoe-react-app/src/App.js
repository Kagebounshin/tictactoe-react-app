import { useState } from 'react';
import './App.css';

function Square({ value, onSquaresClick }) {
  return (
  <button 
    className="square"
    onClick={ onSquaresClick }
    >
      { value }
    </button>
  );
}

function App({xIsNext, squares, onPlay}) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else  {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  function calculateWinner(squares) {
    const winOptions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i in winOptions) {
      const [a,b ,c] = winOptions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      };
    };
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O"); 
  } 

  return (
    <>
    <div className="status">{ status }</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquaresClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquaresClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquaresClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquaresClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquaresClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquaresClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquaresClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquaresClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquaresClick={() => handleClick(8)} /> 
        </div>
      </div>
    </>
  );
}

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1]; 

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <>
    <div className="game">
      <div className="game-board">
        <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{ /*TODO*/ }</ol>
      </div>
    </div>
    </>
  )
}

export default App;
