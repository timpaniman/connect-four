// An 'AI' player.

"use strict";

const {makeBoard, drop, show, won, isDraw, outOfBound} = require('./board');


// A strategy is a function from (board, player) to move.

function fixedStrategy(moves) {
    let n = 0;
    return (board, player) => moves[n++];
}


// Let's try it out.

function test() {
    play([fixedStrategy([0, 1, 2, 3, 4, 5, 6, 7]),
          fixedStrategy([0, 0, 0, 0, 0, 0, 0, 0])]);
}

function play(strategies) {
    const board = makeBoard();
    
    for (let player = 1; ; player = 3 - player) {
        const mark = ['X', 'O'][player-1];
        const move = strategies[player-1](board, player);

        console.log(show(board));
        console.log(mark, "moves", move);
        console.log();
        
        drop(board, move, player);
        if (won(board, move)) {
            console.log(show(board));
            console.log(mark, "wins.");
            break;
        }
    }
}

test();
process.exit(0);
