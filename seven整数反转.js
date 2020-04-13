var reverse = function(x) {

    var b = x.toString().includes('-')
    var flage = 0
    if(b){
       flage = '-' + x.toString().split('-')[1].split('').reverse().join('')
    }else {
       flage = x.toString().split('').reverse().join('')
    }
    if(flage > Math.pow(2,31) || flage <  (Math.pow(-2, 31)-1)){
        return 0
    }else {
        return flage
    }
};
reverse(123)
reverse(-123)
reverse(120)
/**
总结
反转整数变成字符串，变成数组，利用reverse 反转在转换成字符串
记住资格api 的调用的主题是谁（这是这道题的主要费时点）证明自己的基础是不牢固
.split() //分解字符串 变成数组
.reverse() // 反转数组
.join() //数组插入 传入的参数 变成字符串
Math.pow  //who 的次幂
es6 的写法 是 **
*/
