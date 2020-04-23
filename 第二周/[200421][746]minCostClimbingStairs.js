/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var bb = 0
    var b = 0
    for(let i = 0 ; i <cost.length; i++ ){
        var temp = b
        b = Math.min(b,bb) + cost[i]
        bb = temp
    }
    return Math.min(b, bb)
};
