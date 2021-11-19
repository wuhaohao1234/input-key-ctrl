# input-key-ctrl

```js
// @ts-nocheck
/**
 * 键盘上有5个键位置，分别是：a, ctrl, c, v, x
 * 
 * 输入a 1 如果是选中的，则直接赋值，如果没有选中，则添加，添加后，选中状态为false
 * 
 * ctrl + c 复制： 将选中内容复制到剪贴板 2
 * 
 * ctrl + v 粘贴： 将剪贴板内容粘贴到输入框 (如果当前有选中，
 *  则会将选中替换为剪贴板内容) 粘贴后，选中状态消失
 * 
 * ctrl + x 剪贴： 删除当前一行，并把当前一行复制到剪贴板 4
 * ctrl + a 全选： 全选当前一行 5
 * 这5个键位分别用1， 2， 3， 4， 5 表示 a, ctrl + c , ctrl + v , ctrl + x, ctrl + a
 * 输入1， 1， 1
 * 输出 3
 * 输入1, 2 , 3
 * 输出 1
*/

/**
 * a => 1
 * ctrl + c => 2
 * ctrl + v => 3
 * ctrl + x => 4
 * ctrl + a => 5
 * */ 
const inputKey = require('../src/index')

describe('输入，剪贴板', () => {
  test('输入a得到1', () => {
    expect(inputKey(1)).toBe(1)
  })
  test('输入a, a得到2', () => {
    expect(inputKey(1, 1)).toBe(2)
  })
  test('输入a, a, a得到3', () => {
    expect(inputKey(1, 1, 1)).toBe(3)
  })
  test('输入a, ctrl + a, ctrl + c, ctrl + v 还是得到1', () => {
    expect(inputKey(1, 5, 2, 3)).toBe(1)
  })
  test('输入a, ctrl + x, ctrl + v 还是得到1', () => {
    expect(inputKey(1, 4, 3)).toBe(1)
  })
  test('输入a, ctrl + a, a,  ctrl + v 还是得到1', () => {
    expect(inputKey(1, 4, 3)).toBe(1)
  })
  test('输入a, ctrl + a, a, ctrl + v 还是得到1', () => {
    expect(inputKey(1, 5, 1, 3)).toBe(1)
  })
  test('输入a, ctrl + x, a, ctrl + v 还是得到2', () => {
    expect(inputKey(1, 4, 1, 3)).toBe(2)
  })
  test('输入a, ctrl + x, a, ctrl + v, ctrl + v 还是得到3', () => {
    expect(inputKey(1, 4, 1, 3, 3)).toBe(3)
  })
})
```