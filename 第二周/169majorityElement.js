/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // var numss = nums.sort()
  // var len = numss.length
  // var halflen = parseInt(len/2)
  // var item = numss[1]
  // var flage = 0
  // for (var i = 0; i < numss.length; i++) {
  //   if(numss[i] == item){
  //     flage ++
  //   }else {
  //     item = numss[i]
  //     flage = 1
  //   }
  //   if(flage > halflen){
  //     return numss[i]
  //   }
  // }

  // var numss = nums.sort()
  // return numss[parseInt(numss.length/2)]

  var count = 1
  var item = nums[0]
  for (var i = 1; i < nums.length; i++) {
    if (count == 0) {
      item = nums[i]
    }
    if (nums[i] == item) {
      count++
    } else {
      count--
    }
  }
  return item
};
