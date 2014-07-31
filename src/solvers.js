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
  var possibleBoards = [];
  var baseRows = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
  var finalBoards = [];
  var newBoard = [];


//  9pm Wed game plan:
//
// loop through possibleBoards
// append baseRows[1] to each element
// copy magic
// append baseRows[2] to each element (that came from copy magic)
// concatenate the two different arrays
// set that concatenation equal to possibleBoards
// call/do above a total of n times

debugger;
        for(var i = 0; i < baseRows.length; i++){
          newBoard = [];
          newBoard.push(baseRows[i]);
          possibleBoards.push(newBoard);
        };
        for( var k = 1; k < n; k++ ){

          // for each element in possibleBoards
          // append baseRows[i]
          for( var i = 0; i < possibleBoards.length; i++ ){
            for( var j = 0; j < baseRows.length; j++ ){
              possibleBoards[i].push(baseRows[j]);
            };
          };

        };



//   for( var i = 0; i < n; i++){
//     for( var j = 0; j < n; j++){
//       for( var k = 0; k < n; k++){
//         for( var l = 0; l < n; l++){
//           possibleBoards.push(new Board([baseRows[i], baseRows[j], baseRows[k], baseRows[l]]));
//         }
//       }
//     }
//   }
  for( var i = 0; i < finalBoards.length; i++ ){
    if( !finalBoards[i].hasAnyRowConflicts() && !finalBoards[i].hasAnyColConflicts() ){
      solutionCount++;
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
