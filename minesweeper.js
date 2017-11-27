const board = [
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']
];

console.log('Current Board: ');
const printBoard = () => {
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
};
printBoard(board);

console.log('Current Board: ');
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);




