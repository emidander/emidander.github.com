  function createEmptyArray(rows, columns, initialValue) {
    var array = new Array();
    for (var row = 0; row < rows; row++) {
      array[row] = new Array();
      for (var col = 0; col < columns; col++) {
        array[row][col] = initialValue;
      }
    }
    return array;
  }
  
  function createRandomGameOfLife(rows, columns, liveCellFactor) {
    var golArray = createEmptyArray(rows, columns, false);
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < columns; col++) {
        if (Math.random() < liveCellFactor) {
          golArray[row][col] = true;
        }
      }
    }
    return golArray;
  }

  function stepGameOfLife(golArray, golArraySwap, rows, columns) {

    // NOTE: There are better algorithms for the game of life, but I didn't have time. I just wanted 
    // to see what this would look like :)

    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < columns; col++) {
        var neighbourCount = 0;
        for (var nRow = (row == 0 ? 0 : row - 1); nRow <= (row == rows - 1 ? rows - 1 : row + 1); nRow++) {
          for (var nCol = (col == 0 ? 0 : col - 1); nCol <= (col == columns - 1 ? columns - 1 : col + 1); nCol++) {
            if (!(nRow == row && nCol == col) && golArray[nRow][nCol]) {
              neighbourCount++;
            }
          }
        }
//        console.log(row + 'x' + col + ' = ' + neighbourCount);
        if (golArray[row][col]) {
          if (neighbourCount < 2) {
            golArraySwap[row][col] = false;
          } else if (neighbourCount > 3) {
            golArraySwap[row][col] = false;
          } else {
            golArraySwap[row][col] = true;
          }
        } else {
          if (neighbourCount == 3) {
            golArraySwap[row][col] = true;
          } else {
            golArraySwap[row][col] = false;
          }
        }
      }
    }
  }
