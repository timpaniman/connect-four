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

rl.prompt();
let player = 1;
rl.on('line', (line) => {

    // Kevin.   Take turn in player
    switch (line.trim()) {
        case 'Q':
            console.log('End of Game.');
            process.exit(0);
        case '0':

            console.log('===================================================');
            console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
            console.log('\n');
            drop(b, 0, player);
            console.log('0 1 2 3 4 5 6');
            console.log('_____________');
            console.log(show(b));
            if (won(b, 0)) {

                console.log('Connect 4 Completed. Player ' + player.toString() + ' is winnwer.  Bye');
                process.exit(0);
            }
            if (isDraw(b)) {
                console.log(show(b));
                console.log('The game is Draw. Bye');
                process.exit(0);
            }
            console.log('\nEnter Here >> ');


            if (!outOfBound(b, 0, player)) {
                if (player == 1) player = 2;
                else player = 1
                return;
            } else { console.log('\n'); break; return; }
            break;
        case '1':

            console.log('===================================================');
            console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
            console.log('\n');
            drop(b, 1, player);
            if (won(b, 1)) {
                console.log(show(b));
                console.log('Connect 4 Completed. Player ' + player.toString() + ' is winnwer.  Bye');
                process.exit(0);
            }
            if (isDraw(b)) {
                console.log(show(b));
                console.log('The game is Draw. Bye');
                process.exit(0);
            }
            console.log('0 1 2 3 4 5 6');
            console.log('_____________');
            console.log(show(b));
            console.log('\nEnter Here >> ');


            if (!outOfBound(b, 1, player)) {
                if (player == 1) player = 2;
                else player = 1
                return;
            } else { console.log('\n'); break; return; }
            break;
        case '2':

            console.log('===================================================');
            console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
            console.log('\n');
            drop(b, 2, player);
            if (won(b, 2)) {
                console.log(show(b));
                console.log('Connect 4 Completed. Player ' + player.toString() + ' is winnwer.  Bye');
                process.exit(0);
            }
            if (isDraw(b)) {
                console.log(show(b));
                console.log('The game is Draw. Bye');
                process.exit(0);
            }
            console.log('0 1 2 3 4 5 6');
            console.log('_____________');
            console.log(show(b));
            console.log('\nEnter Here >> ');


            if (!outOfBound(b, 2, player)) {
                if (player == 1) player = 2;
                else player = 1
                return;
            } else { console.log('\n'); break; return; }
            break;

        case '3':

            console.log('===================================================');
            console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
            console.log('\n');
            drop(b, 3, player);
            if (won(b, 3)) {
                console.log(show(b));
                console.log('Connect 4 Completed. Player ' + player.toString() + ' is winnwer.  Bye');
                process.exit(0);
            }
            if (isDraw(b)) {
                console.log(show(b));
                console.log('The game is Draw. Bye');
                process.exit(0);
            }
            console.log('0 1 2 3 4 5 6');
            console.log('_____________');
            console.log(show(b));
            console.log('\nEnter Here >> ');


            if (!outOfBound(b, 3, player)) {
                if (player == 1) player = 2;
                else player = 1
                return;
            } else { console.log('\n'); break; return; }
            break;
        case '4':

            console.log('===================================================');
            console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
            console.log('\n');
            drop(b, 4, player);
            if (won(b, 4)) {
                console.log(show(b));
                console.log('Connect 4 Completed. Player ' + player.toString() + ' is winnwer.  Bye');
                process.exit(0);
            }
            if (isDraw(b)) {
                console.log(show(b));
                console.log('The game is Draw. Bye');
                process.exit(0);
            }
            console.log('0 1 2 3 4 5 6');
            console.log('_____________');
            console.log(show(b));
            console.log('\nEnter Here >> ');


            if (!outOfBound(b, 4, player)) {
                if (player == 1) player = 2;
                else player = 1
                return;
            } else { console.log('\n'); break; return; }
            break;
        case '5':

            console.log('===================================================');
            console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
            console.log('\n');
            drop(b, 5, player);
            if (won(b, 5)) {
                console.log(show(b));
                console.log('Connect 4 Completed. Player ' + player.toString() + ' is winnwer.  Bye');
                process.exit(0);
            }
            if (isDraw(b)) {
                console.log(show(b));
                console.log('The game is Draw. Bye');
                process.exit(0);
            }
            console.log('0 1 2 3 4 5 6');
            console.log('_____________');
            console.log(show(b));
            console.log('\nEnter Here >> ');


            if (!outOfBound(b, 5, player)) {
                if (player == 1) player = 2;
                else player = 1
                return;
            } else { console.log('\n'); break; return; }
            break;
        case '6':

            console.log('===================================================');
            console.log('Player ' + player.toString() + ', enter your column choice (0 - 6):')
            console.log('\n');
            drop(b, 6, player);
            if (won(b, 6)) {
                console.log(show(b));
                console.log('Connect 4 Completed. Player ' + player.toString() + ' is winnwer.  Bye');
                process.exit(0);
            }
            if (isDraw(b)) {
                console.log(show(b));
                console.log('The game is Draw. Bye');
                process.exit(0);
            }
            console.log('0 1 2 3 4 5 6');
            console.log('_____________');
            console.log(show(b));
            console.log('\nEnter Here >> ');


            if (!outOfBound(b, 6, player)) {
                if (player == 1) player = 2;
                else player = 1
                return;
            } else { console.log('\n'); break; return; }
            break;

        default:
            console.log(`Invalid Choice. '${line}'`);
            break;
            return;
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});