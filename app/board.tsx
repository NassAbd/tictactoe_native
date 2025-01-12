import React from "react";
import Square from "./square";

export default function Board(props: { squares: Array<string | number>; onPress: (i: number) => void }) {
    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gap: '5px',
    };

    return (
        <div style={boardStyle}>
            {props.squares.map((square, index) => (
                <Square key={index} value={square} onPress={() => props.onPress(index)} />
            ))}
        </div>
    );
}