import { useEffect, useState } from 'react';

function KnightsTour() {

  const [height, setHeight] = useState(8);
  const [width, setWidth] = useState(8);
  const [row, setRow] = useState(null);
  const [col, setCol] = useState(null);
  const [board, setBoard] = useState([]);

  const isValid = (r, c) => {
    return r >= 0 && r < height && c >= 0 && c < width && board[r][c] !== 'VISITED';
  }

  const resetBoard = (width, height) => {
    setWidth(width);
    setHeight(height);
    const newBoard = [];
    for (let i = 0; i < height; i++) {
      newBoard.push([]);
      for (let j = 0; j < width; j++) {
        newBoard[i].push("VISITABLE");
      }
    }
    setBoard(newBoard);
  }

  const successorFunction = () => {
    const possibleMoves = [];
    if (isValid(row + 2, col + 1)) possibleMoves.push([row + 2, col + 1]);
    if (isValid(row - 2, col - 1)) possibleMoves.push([row - 2, col - 1]);
    if (isValid(row - 2, col + 1)) possibleMoves.push([row - 2, col + 1]);
    if (isValid(row + 2, col - 1)) possibleMoves.push([row + 2, col - 1]);
    if (isValid(row + 1, col + 2)) possibleMoves.push([row + 1, col + 2]);
    if (isValid(row - 2, col - 2)) possibleMoves.push([row - 1, col - 2]);
    if (isValid(row + 1, col - 2)) possibleMoves.push([row + 1, col - 2]);
    if (isValid(row - 1, col + 2)) possibleMoves.push([row - 1, col + 2]);
  }

  const applySuccessor = () => {
    // remove previous successors
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (board[i][j] === 'VISITABLE') {
          board[i][j] = 'UNVISITABLE'
        }
      }
    }
    // add new successors to board
    const possibleMoves = successorFunction();
    possibleMoves.forEach((i, j) => {
      board[i][j] = 'VISITABLE';
    });
  }

  const makeMove = (r, c) => {
    board[r][c] = 'VISITED';
    setRow(r);
    setCol(c);
    board[r][c] = 'CURRENT';
    applySuccessor();
  }

  return (
    <div>
      <label>Board Dimensions</label>
      <br />
      <input 
        type='number'
        min={3}
        max={10} 
        value={width} 
        onChange={e => resetBoard(e.target.value, height) }
      />
      X
      <input 
        type='number'
        min={3}
        max={10} 
        value={height} 
        onChange={e => resetBoard(width, e.target.value) }
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${width}, 1fr)`,
          gap: 0,
        }}  
      >
        {
          board.map((row, i) => {
            return row.map((state, j) => {
              let key = `${i}${j}`
              if (state === 'VISITABLE') 
                return <div key={key}>VA</div>
              else if (state === 'VISITED') 
                return <div key={key}>VD</div>
              else if (state === 'UNVISITABLE') 
                return <div key={key}>UV</div>
              else if (state ==='CURRENT') 
                return <div key={key}>CU</div>
            })
          })
        }
      </div>
    </div>
  );
}

export default KnightsTour;