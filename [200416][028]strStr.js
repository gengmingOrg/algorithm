/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == '') {
    return 0
  }
  let len = needle.length
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, len) == needle) {
      return i
    }
  }
  return -1
};

/***
  总结
  判断两个字符串是否相等
  要不就是暴力解法 两层for循环
*/
