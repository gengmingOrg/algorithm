function resever(x) {
  if(x < 0 || x % 10 == 0 && x != 0){
    return false
  }else {
    var reseverNumber = 0
    while (x > reseverNumber) {
      reseverNumber = reseverNumber * 10 + x % 10
      x = Number.parsInt(x/10)
    }
    return x == reseverNumber || x == Number.parsInt(reseverNumber/10)
  }
}
12321
