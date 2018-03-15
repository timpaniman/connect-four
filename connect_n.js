// Connect-N game at the console

const { makeBoard, drop, show, won, isDraw, outOfBound } = require('./board');

// Kevin,  command line user input processing
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '\nEnter Here >> '
});
const endGame = false; // flag to exit while loop of getting user input to end game
const b = makeBoard();
// kevin,  user input handling
console.log('Welcome to Connect 4.  Below is the blank board to start.')
console.log('Enter Q to quit game!')
console.log('Player 2, enter your column choice (0 - 6):')
console.log('\n');
console.log('0 1 2 3 4 5 6');
console.log('_____________');
console.log(show(b));

function turn(moveString) {
    const move = parseInt(moveString);
    console.log('You entered', moveString);
    console.log('\n');
    console.log('===================================================');
    console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
    console.log('\n');
    drop(b, move, player);
    console.log('0 1 2 3 4 5 6');
    console.log('_____________');
    console.log(show(b));
    console.log('\nEnter Here >> ');

    if (won(b, move)) {
        console.log('Connect 4 Completed. End of Game. Bye');
        process.exit(0);
    }
    if (isDraw(b)) {
        console.log('The game is Draw. Bye');
        process.exit(0);
    }
    if (!outOfBound(b, move, player)) {
        if (player == 1) player = 2;
        else player = 1
        return;
    } else { console.log('\n'); return; }

}

rl.prompt();
let player = 1;
rl.on('line', (line) => {

    // Kevin.   Take turn in player
    switch (line.trim()) {
        case 'Q':
            console.log('End of Game.');
            process.exit(0);
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            turn(line.trim());
            break;
        default:
            console.log(`Invalid Choice. '${line}'`);
            return;
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});
