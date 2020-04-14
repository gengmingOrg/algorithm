
var removeDuplicates = function(nums) {
    if(nums.length < 2){
      return nums.lenght
    }
    let j = 0
    for (var i = 1; i < nums.length; i++) {
      if(nums[j] != nums[i]){
        j ++
        nums[j] = nums[i]
      }
    }
    console.log(j);
    return j + 1
};
var arr = [1,1,2]
removeDuplicates(arr)
/***
  总结  splice 会改变原来的数组所以 splice 不行 改用快慢指针

*/
