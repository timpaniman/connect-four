// Connect-N game at the console

const {makeBoard, drop, show} = require('./board');

// Kevin,  command line user input processing
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter column # between 0 and 6 (Q to quit) > '
});
const endGame = false; // flag to exit while loop of getting user input to end game

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
    drop(b, 0, 1);
    console.log(show(b));
    console.log();

    // now test out of bound drop => Success
    drop(b, 1, 1);
    console.log(show(b));
    console.log();


    // now test out of bound drop => Fail
    drop(b, 7, 1);
    console.log(show(b));
    console.log();

    // now test out of bound drop => Success
    drop(b, 6, 1);
    console.log(show(b));
    console.log();

    return;
}

testme();

// kevin,  user input handling

rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case 'Q':
            console.log('End of Game.');
            process.exit(0);
        case '0':
            console.log('You entered 0');
            return;
        case '1':
            console.log('You entered 1');
            return;
        case '2':
            console.log('You entered 2');
            break;
        case '3':
            console.log('You entered 3');
            break;
        case '4':
            console.log('You entered 4');
            break;
        case '5':
            console.log('You entered 5');
            break;
        case '6':
            console.log('You entered 6');
            break;
        default:
            console.log(`Invalid Choice. '${line}'`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});
