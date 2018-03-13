// Connect-N board

// How many pieces in a row are needed to win.
const nstreak = 3;   // I think we want 5? But this is easier to test.

// The size of the board
const nrows = 6;
const ncols = 7;

// A board is represented as an array of stacks of pieces. A piece is
// an integer 1 or 2 denoting which player's.
function makeBoard() {
    const cols = [];
    for (let i = 0; i < ncols; ++i) cols.push([]);
    return cols;
}

// Mutate the board: drop the piece into column c.
function drop(board, c, piece) {
    board[c].push(piece);
}

// The piece at (r,c): 1, 2, or 0 (meaning empty).
function at(board, r, c) {
    if (c < 0 || ncols <= c) return 0;
    const col = board[c];
    if (r < 0 || col.length <= r) return 0;
    return col[r];
}

const pieces = ['.', 'X', 'O'];

// Return an ASCII representation of the board.
function show(board) {
    const rows = [];
    for (let r = nrows-1; 0 <= r; --r) {
        const row = [];
        for (let c = 0; c < ncols; ++c) row.push(pieces[at(board, r, c)]);
        rows.push(row.join(' '));
    }
    return rows.join('\n');
}

// Precondition: the last move was to column c.
// Did that move win the game?
function won(board, c) {
    const r = board[c].length - 1;
    return (   streak(board, r, c, 1, 0)    // vertical
            || streak(board, r, c, 0, 1)    // horizontal
            || streak(board, r, c, 1, 1)    // rising diagonal
            || streak(board, r, c, 1, -1)); // falling diagonal
}

// Is there a streak of at least nstreak pieces of the same type going
// through (r0,c0) in the direction (dr,dc)?
function streak(board, r0, c0, dr, dc) {
    const piece = at(board, r0, c0);
    let n = 1;
    for (let r = r0+dr, c = c0+dc; piece === at(board, r, c); r += dr, c += dc) {
        n += 1;
    }
    for (let r = r0-dr, c = c0-dc; piece === at(board, r, c); r -= dr, c -= dc) {
        n += 1;
    }
    return nstreak <= n;
}


// Smoke test

function testme() {
    const b = makeBoard();

    console.log(show(b));
    console.log();

    drop(b, 0, 1);
    drop(b, 0, 2);
    drop(b, 2, 1);
    console.log(show(b));
    console.log(won(b, 2));
    console.log();

    drop(b, 0, 2);
    console.log(show(b));
    console.log(won(b, 0));
    console.log();

    drop(b, 1, 1);
    console.log(show(b));
    console.log(won(b, 1));
    console.log();
}

testme();
