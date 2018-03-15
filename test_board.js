"use strict";

const {makeBoard, at, drop, show, won} = require('./board');

// Smoke test

function testme() {
    let b, mover, lastMove, moveNumber;

    function restart() {
        b = makeBoard();
        mover = 2;
        moveNumber = 0;
        lastMove = null;
    }

    function move(column) {
        mover = 3 - mover;   // swap the player number: 1->2, 2->1
        drop(b, column, mover);
        ++moveNumber;
        lastMove = column;
        if (won(b, lastMove)) console.log('won on move', moveNumber);
    }

    function report() {
        console.log(show(b));
        console.log();        
    }

    restart();

    // empty
    report();

    // vertical stack
    move(0);
    move(0);
    move(0);
    report();

    // diagonal win
    move(1);
    move(1);
    move(0);
    move(2);
    report();

    // let's try the other diagonal
    restart();

    move(4); move(4);
    move(4); move(3);
    move(3); move(5);
    move(2);
    report();

}

testme();
process.exit(0);
