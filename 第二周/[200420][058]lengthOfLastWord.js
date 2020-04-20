/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // var arr = s.trim().split(' ')
    // return arr[arr.length-1].length
    // let j = 0
    // for(let i = s.length - 1; i > -1; i--){
    //     if(s[i] != ' '){
    //         j++
    //     }else if(s[i] == ' ' && j > 0){
    //         return j
    //     }
    // }
    // return j
    let end = s.length - 1;
    while(end >= 0 && s[end] == ' ') end--;
    if(end < 0) return 0;
    let start = end;
    while(start >= 0 && s[start] != ' ') start--;
    return end - start;

};

/**
  总结：1 直接调用 api 去掉空格 然后直接转化成数组，判断最有一个位置的长度
      2 判断最后一个是不是空格：如果空格 就不是最后一个 然后在碰到空格 或者结束 返回长度 时间 25分钟 用时可以
*/
