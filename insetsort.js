function insetSort(array) {
  var temp
  for (var i = 1; i < array.length; i++) {
    temp = array[i]
    for (var j = i ;j > 0 && temp < array[j-1] ;j--) {
      array[j] = array[j-1]
      array[j-1] = temp
    }
  }
  console.log(array);
}
var a = [2,1,3,7,4,5]
insetSort(a)
