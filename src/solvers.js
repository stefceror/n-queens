/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, startingPos) {
  var solution = [];
  var row = [];
  rookPosition = startingPos || 0;
  for( var j = 0; j < n; j++ ){
    row = [];
    for( var i = 0; i < n; i++ ){
      if( i === rookPosition % n ){
        row.push(1);
      }else{
        row.push(0);
      }
    }
    rookPosition++;
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards 'that' exist, with n rooks

// placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  //make new empty board
  var board = new Board({'n':n});
  var rookCounter = 0;
  //call function
  var makePlacements = function(){
    //loop across n
    for(var i = 0; i < n; i++){
      //make placement
      board.togglePiece(rookCounter, i);
      //check if valid
      if(board.hasAnyRooksConflicts()){
        //yes: try next
        board.togglePiece(rookCounter, i);
      }else{
      //no: keep, increase counter
        rookCounter++;
        //check if last placement
        if(rookCounter === n){
          //yes: push board to finalBoards
          solutionCount++;
        }else{
          //call again
          makePlacements();
        }
          rookCounter--;
          board.togglePiece(rookCounter, i);
      }
    }
  }
  makePlacements();


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var board = new Board({'n':n});

  for( var i = 0; i < n; i++ ){
    for( var j = 0; j < n; j++ ){
      board.togglePiece(i, j);
      if(board.hasAnyQueensConflicts()){
        board.togglePiece(i, j);
      }else{
        break;
      }
    }
  }
  for( var i = 0; i < n; i++ ){
    solution.push(board.attributes[i]);
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
