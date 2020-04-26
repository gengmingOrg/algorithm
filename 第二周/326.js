/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
        if(n == 0) return false
        var  a =  1
        while (a < n) {
          a*=3
        }
        return a == n
};
