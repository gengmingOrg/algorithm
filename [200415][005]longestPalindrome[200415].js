/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length < 2) return s
  var a = [s[0]]
  var s
  for (var i = 1; i < s.length; i++) {
    let index = a.indexOf(s[i])
    if(index == -1){
      a.push(s[i])
    }else {
      let t = a.slice(index)
      if(s.length < t.lenght){
        s = t
      }
    }
  }
};

// 未完成  16号整理这个 中等
