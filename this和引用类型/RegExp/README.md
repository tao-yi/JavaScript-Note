### RegExp

ECMAScript 通过 RegExp 类型来支持正则表达式。

支持 3 种匹配模式：

- `g` 全剧模式，即模式将被应用于所有字符串，而非在发现第一个匹配时立即停止。
- `i` 表示不区分大小写模式，匹配时忽略大小写
- `m` 多行模式，到达一行文本末尾时还会继续查找下一行

```js
// 匹配所有 "at" 的实例
const pattern1 = /at/g;

// 匹配第一个bat或cat，不区分大小写
const pattern2 = /[bc]at/i;

// 匹配所有以 "at" 结尾的 3个字符的组合，不区分大小写
const pattern3 = /.at/gi;
```
