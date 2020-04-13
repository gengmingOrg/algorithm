var longestCommonPrefix = function(strs) {
    //判断为空的形式

    // 从第一个开始对比 ，循环接下来的字符串
    if(strs.length === 0){
      return ''
    }
    let flage = strs[0]
    for (var i = 1; i < strs.length; i++) {

      let j = 0
      for (; j < strs[i].length; j++) {
        if(flage[j] != strs[i][j]){
          break
        }
      }
      flage = flage.substr(0,j)
      if(flage === ''){
        return ''
      }
    }
    return flage
};
