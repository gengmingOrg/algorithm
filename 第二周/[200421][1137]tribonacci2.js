/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // var arr = [0,1,1]
    // for(let i = 3 ; i <= n ;i++){
    //     arr[i] = arr[i-1] +  arr[i-2] + arr[i-3]
    // }
    // return arr [n]
    if(n == 0){
        return 0
    }
    let first = 0
    let second = 1
    let three = 1
    for(let i = 3 ; i <= n ;i++){
        let temp2 =  second
        let temp3 = three
        three = three + second + first
        first = temp2
        second = temp3
    }
    return three
};
