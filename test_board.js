<<<<<<< HEAD
const { makeBoard, drop, show } = require('./board');
=======
"use strict";

const {makeBoard, at, drop, show, won} = require('./board');
>>>>>>> b767954c6e19b0dcd06298d6f0ad0ddb5bb78a8f

// Smoke test

function testme() {
<<<<<<< HEAD
    const b = makeBoard();

    console.log(show(b));
    console.log();

    // show vertical stack
    drop(b, 0, 1);
    drop(b, 0, 2);
    drop(b, 0, 1);
    drop(b, 0, 2);
    console.log(show(b));
    console.log();


    // show horizontal stack
    drop(b, 0, 1);
    drop(b, 1, 2);
    drop(b, 2, 1);
    drop(b, 3, 2);
    console.log(show(b));
    //  console.log(won(b, 1));
    console.log();
    // now test dropping into non-empty column
    drop(b, 0, 1);
    drop(b, 1, 2);
    drop(b, 2, 1);
    drop(b, 3, 2);
    console.log(show(b));
    console.log();

    // now test out of bound drop => Fail
    //drop(b, 0, 1);
    //console.log(show(b));
    //console.log();

    // now test out of bound drop => Success
    drop(b, 1, 1);
    console.log(show(b));
    console.log();


    // now test out of bound drop => Fail
    //drop(b, 7, 1);
    //console.log(show(b));
    //console.log();

    // now test out of bound drop => Success
    drop(b, 6, 1);
    console.log(show(b));
    console.log();
=======
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

>>>>>>> b767954c6e19b0dcd06298d6f0ad0ddb5bb78a8f
}

testme();
process.exit(0);