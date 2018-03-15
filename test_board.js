const {makeBoard, drop, show} = require('./board');

// Smoke test

function testme() {
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
    if (false) {
    drop(b, 0, 1);
    console.log(show(b));
    console.log();
    }

    // now test out of bound drop => Success
    drop(b, 1, 1);
    console.log(show(b));
    console.log();


    // now test out of bound drop => Fail
    if (false) {
    drop(b, 7, 1);
    console.log(show(b));
    console.log();
    }

    // now test out of bound drop => Success
    drop(b, 6, 1);
    console.log(show(b));
    console.log();
}

testme();
process.exit(0);
