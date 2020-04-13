var isValid = function(s) {
  if(s == ''){
    return true
  }
  var valid = false
  var leftMap = [
    '(', '{', '['
  ]
  var rightMap = [']', '}', ')']
  var map = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  var stringArray = s.split('')
  var qunce = []
  for (var i = 0; i < stringArray.length; i++) {

    if(leftMap.includes(stringArray[i])){
      qunce.push(stringArray[i])
    }else if(rightMap.includes(stringArray[i])){
      let index = qunce.lastIndexOf(map[stringArray[i]])
      if(index != qunce.length -1  || index == -1){
        return false
      }
      qunce = qunce.slice(0, index)
    }
  }
  if(qunce.length != 0 ) return false
  return true
};
