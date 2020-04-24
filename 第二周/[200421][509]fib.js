/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    // let arr = [0,1,1,2]
    // for(let i = 3; i <= N; i++ ){
    //     arr[i] = arr[i-1]+arr[i-2]
    // }
    // return arr[N]
    if(N == 0 ){
        return 0
    }
    let first = 0
    let second = 1
    for(let i = 2; i<= N ;i++){
        [second,first] = [first,second]
        second = second + first
    }
    return second
};
