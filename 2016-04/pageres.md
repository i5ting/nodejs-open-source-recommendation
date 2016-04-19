# 抓取网站截图

很多网页特别长，直接的电脑截图非常麻烦，用ps等工具也非常麻烦，所以很多人都问我有木有自动抓出截图的软件

Node.js里是有的

## 推荐pageres

首先全局安装

```
$ PHANTOMJS_CDNURL=https://npm.taobao.org/dist/phantomjs npm install phantomjs --registry=https://registry.npm.taobao.org --no-proxy
$ npm install --global pageres-cli
```

执行

![Screenshot](screenshot.png)

效果如下

![Screenshot Output](screenshot-output.png)

说明：此模块依赖PhantomJS，请备好梯子或者用文中的国内镜像

## 嵌入代码中

通过shell是可以做，这是给其他语言调用的，对于Node.js，你可以使用对应模块就好了

https://github.com/sindresorhus/pageres

```
$ npm install --save pageres
```

PhantomJS, which is used for generating the screenshots, is installed automagically, but in some rare cases it might fail to and you'll get an Error: spawn EACCES error. Download PhantomJS manually and reinstall pageres if that happens.

用法

```
const Pageres = require('pageres');

const pageres = new Pageres({delay: 2})
    .src('yeoman.io', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
    .src('todomvc.com', ['1280x1024', '1920x1080'])
    .dest(__dirname)
    .run()
    .then(() => console.log('done'));
```

## 原理

其实就是利用无头浏览器PhantomJS来实现的截图

剩下的就自己玩去吧



全文完

欢迎关注我的公众号【node全栈】

![node全栈.png](//dn-cnode.qbox.me/FtALxsauUkYDGdzcuA5y6BaIdUMC)


如果想参与评论，请点击原文链接，进入国内最专业的cnode论坛

