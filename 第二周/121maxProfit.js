/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     var max = 0
//     for (let i = 0; i < prices.length; i++) {
//       for (let j = i + 1; j < prices.length; j++) {
//         if((prices[j] - prices[i])>max) {
//           max > prices[j] - prices[i]
//         }
//       }
//     }
//     return max
// };
var maxProfit = function(prices) {
    var end = 0
    var pro= 0
    var recored = 0
    for (var i = 0; i < pirces.length; i++) {
      if(prices[end] > pirces[i]){
        end = i
      }
      recored = prices[end] - pirces[i]
      pro = record > pro ? record : pro;
    }
};
