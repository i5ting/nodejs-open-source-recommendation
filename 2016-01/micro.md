# 开源Nodejs微服务项目推荐：micro

https://github.com/zeithq/micro

_**Micro —** Async HTTP microservices_


## Features

* **Easy**. Designed for usage with `async` and `await` ([more](https://jakearchibald.com/2014/es7-async-functions/))
* **Fast**. Ultra high performance (even JSON parsing is opt-in).
* **Micro**. The whole project is ~100 lines of code.
* **Agile**. Super easy deployment and containerization.
* **Simple**. Oriented for single purpose modules (function).
* **Explicit**. No middleware. Modules declare all dependencies.
* **Standard**. Just HTTP!

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