/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // for (var i = 0; i <= x; i++) {
    //   if(i * i == x ){
    //     return i
    //   }else {
    //     if(i * i < x && (i+1)*(i+1) > x{
    //       return i
    //     }
    //   }
    // }
    // 牛顿法
    if(x < 2){
      return 2
    }
    var x0 = x
    // 根据平方公式
    var x1 =(x0 + x/x0)/2
    while (Math.abs(x0 - x1) >= 1) {
      var x0 = x1
      // 根据平方公式
      var x1 =(x0 + x/x0)/2
    }
    return Number.parseInt(x1)
};
