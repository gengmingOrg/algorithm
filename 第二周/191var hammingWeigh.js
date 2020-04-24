var hammingWeight = function(n) {
    var i = 0
    while(n){

        if(n%2 == 1){
            i++
        }
        n = parseInt(n/2)
    }
    return i
};
