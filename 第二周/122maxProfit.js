/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n == 1) return true
    var n1 = n
    while(true){
        let n2 =0
        while(parsrInt(n1/10)){
          n2 = n2*10 + Math.pow(n1%10,2)
        }
        n1 = n2
        if(n == n1){
            return false
        }else if(n1 == 1){
          return true
        }
    }
};
