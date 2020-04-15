/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let j = 0
  for (var i = 0; i < nums.length; i++) {
    if(val != nums[i]){
      nums[j] = nums[i]
      j++
    }
  }
  return j
};

// 快慢指针的题
