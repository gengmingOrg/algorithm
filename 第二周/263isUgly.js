/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if(num == 0) return false
  if(num == 1) return true
  while (num != 1 && num != -1) {
    if(!(num%2)){
      num = num /2
      continue
    }
    if(!(num%3)){
      num = num /3
      continue
    }
    if(!(num%5)){
      num  = num /5
      continue
    }
    return false
  }
  return true
};
