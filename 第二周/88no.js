/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  var index1 = 0
  var index2 = 0
  var arr = []
  while (index1 < m && index2 < n) {
    if(arr.length){
      if(arr[0]<= nums2[index2]){
        nums1[index1] = arr[0]
        arr.shift()
      }else {
        nums1[index1] = nums2[index2]
        index2++
      }
      index1++
      continue
    }

    if (nums1[index1] <= nums2[index2]) {
      index1++
    } else {
      arr.push(nums1[index1])
      nums1[index1] = nums2[index2]
      index2++
    }
  }
};
