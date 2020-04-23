/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // var  arr = []
    // if(numRows == 1){
    //   arr.push([1])
    // }else {
    //
    // }
    // return arr
    if(numRows == 1 ){
      return [1]
    }
    if(numRows == 2){
      return [[1],[1,1]]
    }
    var arr = [[1],[1,1]]

    for (var i = 2; i < numRows; i++) {
      var temp = []
      // temp = arr[i-1]
      for (let j = 0; j + 1 < arr[i].length; j++) {
        temp[j+1] = arr[i][j] + arr[j+1]
      }
      arr.push(temp)

    }
    return arr
};
