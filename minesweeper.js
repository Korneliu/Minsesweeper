/*const board = [
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
printBoard(board);*/

const generatePlayerBoard =(numberOfRows, numberOfColumns) => {
    let board = [];
    for (let rowI = 0; rowI < numberOfRows; rowI++) {
        let row = [];
        for (let rowJ = 0; rowJ < numberOfColumns; rowJ++) {
          row.push(' ');
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
    for (let rowI = 0; rowI < numberOfRows; rowI++) {
        let row = [];
        for (let rowJ = 0; rowJ < numberOfColumns; rowJ++) {
          row.push(null);
        }
        board.push(row);
    }
    let numberOfBombsPlaced = 0;
    	while (numberOfBombsPlaced < numberOfBombs) {
    	let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    	let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    	board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
			}
 return board
};

const printBoard = board => {
 console.log(board.map(row => row.join(' | ')).join('\n'));
};
const playerBoard = generatePlayerBoard(4, 4);
const bombBoard = generateBombBoard(6, 6 , 4);

console.log('Player Board: ')
printBoard(playerBoard)
console.log('Bomb Board: ')
printBoard(bombBoard);



