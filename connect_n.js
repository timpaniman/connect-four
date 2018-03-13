// Connect-5 board

const nrows = 6;
const ncols = 7;

// A board is represented as an array of stacks of pieces. A piece is
// an integer 1 or 2 denoting which player's.
function makeBoard() {
    const cols = [];
    for (let i = 0; i < ncols; ++i) cols.push([]);
    return cols;
}

// Mutate the board: drop the piece into the column.
function drop(board, col, piece) {
    board[col].push(piece);
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
