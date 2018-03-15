// Connect-N game at the console

const { makeBoard, drop, show } = require('./board');

// Kevin,  command line user input processing
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '\n Enter column # between 0 and 6 (Q to quit) > '
});
const endGame = false; // flag to exit while loop of getting user input to end game
const b = makeBoard();
// kevin,  user input handling

rl.prompt();
let player = 1;
rl.on('line', (line) => {

    // Kevin.   Take turn in player
    switch (line.trim()) {
        case 'Q':
            console.log('End of Game.');
            process.exit(0);
        case '0':
            console.log('You entered 0');
            drop(b, 0, player);
            console.log(show(b));
            if (player == 1) player = 2;
            else player = 1
            return;
        case '1':
            console.log('You entered 1');
            drop(b, 1, player);
            console.log(show(b));
            if (player == 1) player = 2;
            else player = 1
            return;
        case '2':
            console.log('You entered 2');
            drop(b, 2, player);
            console.log(show(b));
            if (player == 1) player = 2;
            else player = 1
            break;
        case '3':
            console.log('You entered 3');
            drop(b, 3, player);
            console.log(show(b));
            if (player == 1) player = 2;
            else player = 1
            break;
        case '4':
            console.log('You entered 4');
            drop(b, 4, player);
            console.log(show(b));
            if (player == 1) player = 2;
            else player = 1
            break;
        case '5':
            console.log('You entered 5');
            drop(b, 5, player);
            console.log(show(b));
            if (player == 1) player = 2;
            else player = 1
            break;
        case '6':
            console.log('You entered 6');
            drop(b, 6, player);
            console.log(show(b));
            if (player == 1) player = 2;
            else player = 1
            break;
        default:
            console.log(`Invalid Choice. '${line}'`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});