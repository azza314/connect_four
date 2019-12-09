let currPlayer = 1;
let board = 
[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

setChoice = (colChoice, currPlayer) => {
    for(let i = board.length - 1 ; i >= 0; i-- ){
        if(board[i][colChoice] == 0){
            board[i][colChoice] = currPlayer;
            break;
        }
    }
}

nextPlayer = (currPlayer) => {
    if(currPlayer == 1){
        currPlayer = 2; 
    } else {
        currPlayer == 1; 
    }
}

checkVerticalWin = (col, row) => {
    let lastDrop = board[row][col];

    if(col > 2){
        return false;
    }
    return lastDrop == board[row + 1][col] && lastDrop == board[row + 2][col] && lastDrop == board[row + 3][col]
}

checkHorizontalWin = (col, row) => {
    let lastDrop = board[row][col];
    let inaRow = 1; 
    // check left
    for(let i = 1; i <= 4; i++){
        if(board[row][col - i] === lastDrop){
            inaRow += 1;  
        } else { break }
    }

    console.log("1", inaRow)

    // check right
    for(let i = 1; i <= 4; i++){
        if(board[row][col + i] === lastDrop){
            inaRow += 1;  
        } else { break }
    }
    console.log("2", inaRow)

    return inaRow >= 4; 
}


// TODO: Re-add currTurn, working on winning algorithms first.
// for(let  i = 0; i <= 42; i++){
//     if(currPlayer === 1){
//         let colChoice = prompt("PLAYER " + currPlayer + " : Select a column" );
//         setChoice(colChoice, 1);
//         currPlayer = 2; 
//     }

//     if(currPlayer === 2){
//         let colChoice = prompt("PLAYER " + currPlayer + " : Select a column");
//         setChoice(colChoice, 2);
//         currPlayer = 1; 
//     }
// }