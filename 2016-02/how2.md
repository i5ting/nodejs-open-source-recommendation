# 开源Node.js项目推荐：how2

stackoverflow是程序员最常用的网站之一，它上面有非常多的问题以及解决方案。基本上除了google和github就得算stackoverflow了。

所以善用stackoverflow是程序员的基本素质之一。

另外terminal终端也是程序员最常用的，那么能不能再终端里查stackoverflow里的问题呢？

本次推荐就是这样的软件

Node.js写的stackoverflow from the terminal开源项目：how2

https://github.com/santinic/how2



## 安装

```
npm install -g how2
```

## Example

The following example `sleep.js` will wait before responding (without blocking!)

```js
import { send } from 'micro';
import sleep from 'then-sleep';
export default async function (req, res) {
  await sleep(500);
  send(res, 200, 'Ready!');
}
```

To run the microservice on port `3000`, use the `micro` command:

```bash
$ micro -p 3000 sleep.js
```

点评

- 技术栈比较潮，es7的async/await，性能会很好
- 遵循node的小而美哲学
- 文档，测试，代码都比较规范

在微服务架构的潮流里，是一个不错的选择


全文完

欢迎关注我的公众号【node全栈】

![node全栈.png](//dn-cnode.qbox.me/FtALxsauUkYDGdzcuA5y6BaIdUMC)


如果想参与评论，请点击原文链接，进入国内最专业的cnode论坛