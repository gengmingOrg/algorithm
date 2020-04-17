// 暴力解法
var searchInsertBrinary = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
      if(nums[i] >= target){
        return i
      }
      if(i == nums.length - 1){
          return nums.length
      }
    }
};

//二分查找
//二分查找
var searchInsert = function(nums, target) {
  if(target > nums[nums.length-1]){
    return nums.length
  }
  if(nums[0] >= target){
    return 0
  }
  let start = 0
  let end = nums.length-1
  let mid

  while (end > start) {
    mid  =  Number.parseInt((start + end)/2)
    if(nums[mid] == target){
     return mid
    }
    if(nums[mid] > target){
      end = mid - 1
    }
    if(nums[mid] < target) {
      start = mid + 1
    }
  }
  // 单独处理
  return target <= nums[start] ? start : start + 1;
};
[1,3]
3
searchInsert([1,3],3)
/***
  总结：暴力解法，时间复杂度为（n） 用二分查找法可以转化O(logn)
*/
