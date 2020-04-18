/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    if(n == 1){
      return '1'
    }else {
      let start = 0,
      end = 0
      let str =  countAndSay(n - 1)
      while (str[start]) {
          end += 1
          if(str[start] != str[start + end] ){
            str = changeStr(str, start, end,''+end+str[start])
            start += 2
            end = 0
          }

      }
      return  str
    }
};

// 替换字符串
function changeStr(str, index, end ,changeStr){
	 return str.substr(0, index) + changeStr+ str.substr(index + end);
}
//总结，在替换字符串的时候 不是很理解 替换的位置 导致自己在 指针移动的位置上面 花了很多心思
