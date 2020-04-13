function pop(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if(array[j] < array[j-1]) {
        [array[j],array[j-1]] = [array[j-1],array[j]]
      }
    }
  }
  console.log(array);
}
var a = [2,1,3,7,4,5]
pop(a)
