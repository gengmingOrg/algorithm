function selectTime(arr){
  // 找出其中最小的 保存下来
  // 依次循环便利
  var temp ,index
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i]
    index = i
    for (var j = i; j < arr.length; j++) {
      if(temp > arr[j]){
        temp = arr[j]
        index = j
      }
    }
    var flage = arr[i]
    arr[i] =  arr[index]
    arr[index] = flage
  }
  console.log(arr)
}
var a = [2,1,3,7,4,5]
selectTime(a)
