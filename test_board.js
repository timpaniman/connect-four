"use strict";

const {makeBoard, at, drop, show, won} = require('./board');

// Smoke test

function testme() {
    let b = makeBoard();
    let empty = true;
    let mover = 2;

    function restart() {
        empty = true;
        mover = 2;
    }

    function move(column) {
        mover = 3 - mover;   // swap the player number: 1->2, 2->1
        drop(b, column, mover);
        empty = false;
    }

    function report() {
        console.log(show(b));
        if (!empty) console.log(won(b, mover));
        console.log();        
    }

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

}

testme();
process.exit(0);
