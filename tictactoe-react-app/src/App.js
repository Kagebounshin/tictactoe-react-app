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

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else  {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <>
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

export default App;
