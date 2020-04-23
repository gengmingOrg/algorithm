/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (var i = digits.length -1 ; i > -1; i--) {
    let temp = digits[i]+1
    if(temp >= 10){
      digits[i] = temp - 10
      if(i == 0){
        digits.unshift(1)
      }
    }else {
      digits[i] = temp
      break
    }
  }
  return digits
};


/**
  总结： 第一反应是变成数字 然后在变成数组 但是可能溢出，
      所以改成判断这个加起来是不是可以进位，就可以了
      用时 12分钟
*/
