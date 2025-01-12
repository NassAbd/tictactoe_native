import React, {useState} from "react";
import Board from "./board";

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i: number) => {
        const newSquares = squares.slice();
        if (newSquares[i] || calculateWinner(newSquares)) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const winner = calculateWinner(squares);
    const draw = calculateDraw(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    }else if (draw && !winner) {
        status = draw.toString();
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    const statusStyle: React.CSSProperties = {
        margin: '10px',
        padding: '10px',
        backgroundColor: winner ? '#32cd32' : draw && !winner ? '#008000' : '#fff',
        color: winner ? '#fff' : draw && !winner ? '#fff' : '#000',
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'center',
    };

    const resetStyle: React.CSSProperties = {
        margin: '10px',
        padding: '10px',
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'center',
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} onPress={handleClick} />
            </div>
            <div className="game-info">
                <div style={statusStyle}>{status}</div>
                <button style={resetStyle} onClick={resetGame}>Reset Game</button>
            </div>
        </div>

    );

}

function calculateWinner(squares: (string | null)[]): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function calculateDraw(squares: (string | null)[]): string | null {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
            return null;
        }
    }
    return 'Draw';
}