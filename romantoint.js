var romanToInt = function(s) {

  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  let ans = 0;
  for (var i = 0; i < s.length; ) {
    if(i + 2 <= s.length && map[s.substr(i,2)]){
      ans += map[s.substr(i,2)]
      i+=2
    }else {
      ans+=map[s.substr(i,1)]
      i+=1
    }

  }
  console.log(ans);
  return ans
}

var a = 'III'
romanToInt(a)
