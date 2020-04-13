function shell(array) {
  var len = array.length
  var h = 1,
  temp
  while (h < len/3) h = h * 3 + 1
  while (h > 0) {
    for (var i = h; i < len; i++) {
      temp = array[i]
      for (var j = i;j >= h && temp < array[j-h]; j -= h) {
        array[j] = array[j-h]
        array[j-h] = temp
      }

    }
    h = Number.parseInt(h/3)
  }
  console.log(array);
}

var a = [2,1,3,7,4,5]
shell(a)
