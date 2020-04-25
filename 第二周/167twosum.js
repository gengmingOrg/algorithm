/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // for (var i = 0; i < numbers.length; i++) {
  //   var letftValue = target - numbers[i]
  //   var rightIndex = numbers.lastIndexOf(letftValue)
  //   if(rightIndex!= -1){
  //     return [i, rightIndex]
  //   }
  // }
  // var index = 0
  // var last = numbers.length-1
  // while (last > index) {
  //   if(numbers[index] + numbers[last] > target){
  //     last--
  //   }else if(numbers[index] + numbers[last] < target){
  //     index++
  //   }else {
  //     return [index+1, last+1]
  //   }
  // }

  // Map<Integer, Integer> map = new HashMap<>();
  // for(int i = 0; i< nums.length; i++) {
  //    if(map.containsKey(target - nums[i])) {
  //        return new int[] {map.get(target-nums[i]),i};
  //    }
  //    map.put(nums[i], i);
  // }
  // throw new IllegalArgumentException("No two sum solution");

  var map = new Map()
  for (var i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])){
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
  return []
};
