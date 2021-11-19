function inputKey() {
  let str = ''
  let isSelect = false
  let selectStr = ''
  let copyStr = ''
  for(let i in arguments) {
    // 输入a
    if (arguments[i] === 1) {
      if(isSelect) {
        str = 'a'
      }else {
        str += 'a'
      }
      isSelect = false
    }
    // 输入ctrl + c
    if(arguments[i] === 2) {
      if (isSelect) {
        copyStr = selectStr
      }
    }
    // 输入ctrl + v
    if(arguments[i] === 3) {
      // 只有全选才可以选中
      if(isSelect) {
        str = copyStr
      } else {
        str += copyStr
      }
      isSelect = false
      selectStr = ''
    }
    // 输入ctrl + x
    if(arguments[i] === 4) {
      copyStr = str
      str = ''
      isSelect = false
    }
    // 输入ctrl + a
    if(arguments[i] === 5) {
      isSelect = true
      selectStr = str
    }

  }
  return str.length;
}
module.exports = inputKey