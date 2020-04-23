/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  // if(num == 1){
  //      return true
  // }
  // let x = parseInt(num / 2);
// while (x * x > num) {
//   x = parseInt( (x + num / x) / 2);
// }
// return (x * x == num);

   if(num == 1){
        return true
   }
   let start = 0
   let mid = parseInt(num / 2);
   let end = num
   while(end > start) {
       if(mid*mid ==  num){
           return true
       }else if(mid*mid > num){
           end = mid - 1
       }else if(mid*mid < num){
           start = mid + 1
       }
       mid =  parseInt((start+ end) / 2);
   }

   return (start * start == num)
};
// 总结： 二分法 就是直接 一半查找
      //求平方公式就用牛顿法 :xk+1 = [xk + x/xk]/2
