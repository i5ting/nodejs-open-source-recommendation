# Why I Love Node.js: Promises, Express, and the CLI

https://dzone.com/articles/why-i-love-nodejs-part-2-adams-blog?edition=144259&utm_source=Spotlight&utm_medium=email&utm_content=queue&utm_campaign=web%20dev%202016-02-18

```
I published a [blog post about Node.js](http://adamfowler.org/2013/05/08/why-i-like-node-js/) a couple of years ago. After recently using it for some more crazy stuff, I thought I’d post more reasons I love [Node.js](http://www.nodejs.org/)!

by Adam Fowler    ·  Feb. 09, 16 · Web Dev Zone
```
  
I published a [blog post about Node.js](http://adamfowler.org/2013/05/08/why-i-like-node-js/) a couple of years ago. After recently using it for some more crazy stuff, I thought I’d post more reasons I love [Node.js](http://www.nodejs.org/)!

几年前我发布了一篇[关于Node.js的博文](http://adamfowler.org/2013/05/08/why-i-like-node-js/)。在最近做了几次对博文更加疯狂的填充之后，我想我写这篇文章更多的原因是因为我热爱[Node.js](http://www.nodejs.org/)!

## Promises, Promises

I mentioned bracket hell in my previous post. Well, in the intervening period, I’ve started using Promises for a lot of things, especially the [Q promises library](https://www.npmjs.com/package/q) in npm.

在我之前的文章里我曾提到过“bracket hell”。当然，在介入一段时间后，我开始使用使用Promises做很多事儿，尤其是npm里的[Q promises 库]。

Promises allow you to easily chain actions together. You can run things in parallel and wait for them to finish, or run things in sequence, or both! I’ve just used both in the last week to start 10 'threads' using [Q.all](https://www.npmjs.com/package/q#combination), with each thread running 1500 tasks in series using [promisesArray.reduce](https://www.npmjs.com/package/q#sequences).

Promises允许你进行简单的链式操作。你可以并行执行代码，直到它们执行完成，或顺序执行，或者二者混用！我曾在上周使用过二者混用，使用[Q.all](https://www.npmjs.com/package/q#combination)来启动10个“线程”，每个线程使用[promisesArray.reduce](https://www.npmjs.com/package/q#sequences)顺序跑1500个任务。

This allowed me to test a customer’s [Node.js](http://www.nodejs.org/) Express based web application at scale with just a few lines of code, which in turn tested high throughput ingest and query loads in [MarkLogic Server](http://developer.marklogic.com/).

这让我可以通过很少的几行代码，去大规模的测试客户的基于[Node.js](http://www.nodejs.org/) Express web框架的应用，在[MarkLogic Server](http://developer.marklogic.com/)里轮流测试高吞吐量和查询负载。

## Express Web Apps

Creating a web server sounds scary, but with [Express](https://www.npmjs.com/package/express) is very, very easy. You just intercept the small number of routes (URL patterns) you need, and you’re away!

创建web server听起来挺吓人的，但使用[Express](https://www.npmjs.com/package/express)却非常非常的简单。你仅仅需要中间截取你需要的小量的路由(URL patterns)，这样就完成了！

You can even use the URL pattern itself to infer parameters. E.g. /get/fred/1 could be used to fetch the first document in the fred collection. Pretty cool, and reminiscent of Ruby on Rails.

你甚至可以使用URL pattern自身的推断参数。例如/get/fred/1 可以用于获取在fred集合里的第一个文档。相当酷吧，让人不禁想到Ruby on Rails。

I’d definitely recommend learning Express first if developing a web application.

如果要是想开发web应用的话，无疑我会优先推荐学习Express。

## 命令行应用 Command Line Applications

Did you know you can even use Node to create an NPM package that installs a global application on any platform? This is **awesome** in NPM form!

你知道可以使用Node创建一个可以在各个平台上全局安装的NPM包应用么？这就是NPM的**酷的**形式。

I’ve used this to package up two tools I use on projects in to my [mlnodetools](https://github.com/adamfowleruk/mlnodetools) package. mljsadmin allows you to capture a MarkLogic application with all server settings and transfer it to another machine with just a couple of commands. mljsserve uses Express mentioned above to create a thin web server which also proxies MarkLogic REST API URLs directly to MarkLogic Server.

我把它用到我的[mlnodetools](https://github.com/adamfowleruk/mlnodetools)包里，把我在项目里的2个工具打包到里面。mljsadmin允许你捕获MarkLogic应用和所有服务器设置，并通过几个命令把它传送到另一个机器。mljsserve使用上文提到的Express来创建一个小web server，使用它代理MarkLogic REST API URLs直接代理到MarkLogic服务器。


This is great for demonstration web apps at work in MarkLogic Sales Engineering (We’re hiring by the way, so please contact me if you’re interested!)

在MarkLogic销售引擎中做的事儿是阐述web应用非常棒的（顺便说一下，我们正在招聘，如果你们感兴趣的话请联系我）。

I use a few NPM packages for mljsadmin:-

我在mljsadmin里使用的几个NPM包:-

- [minimist](https://www.npmjs.com/package/minimist) is used to parse command line arguments. I can’t express my love for this capability enough!
- [q](https://www.npmjs.com/package/q) again is used for promises when chaining complex functionality together (so 'install' runs about 9 sub-commands in series, which can also each be ran on their own from the command line)
- [winston](https://www.npmjs.com/package/winston) is used for logging output and errors to both the command line (info level) and a file (debug level). I use this in my [mljs MarkLogic REST API wrapper](https://github.com/adamfowleruk/mljs) too.
- [istextorbinary](https://www.npmjs.com/package/istextorbinary) allows me to test files to see if they are binaries. Useful as MarkLogic Server doesn’t hold every mime type in use. I use this to determine whether I need to do a binary upload or not, and what mime type to specify
- [terminal-kit](https://www.npmjs.com/package/terminal-kit) is used to provide color coded and styled text on the command line output. Useful so that I can have green for successes, yellow for warnings, and red for major errors.

- [minimist](https://www.npmjs.com/package/minimist)用于解析命令行参数。我无法表达我对它足够强大能力的热爱！
- [q](https://www.npmjs.com/package/q)再次用于promises，把复杂函数链接一起(所以当'install'顺序执行9各子命令， runs about 9 sub-commands in series, which can also each be ran on their own from the command line)
- [winston](https://www.npmjs.com/package/winston)用于在命令行(info level)或文件(debug level)里记录日志输出和错误。我也在我的 [mljs MarkLogic REST API wrapper](https://github.com/adamfowleruk/mljs) 里也用它了.
- [istextorbinary](https://www.npmjs.com/package/istextorbinary) 让我可以测试文件，判断它们是不是二进制。在使用MarkLogic Server不掌握每一个mime类型的时候是非常有用的。我用它来决断，物流我需要一个上传二进制文件或者其他，或指定哪种mime类型。
- [terminal-kit](https://www.npmjs.com/package/terminal-kit)用于提供命令行输出里的代码着色和样式文本。在我用绿色表示成功，黄色表示警告，红色代表主要错误的时候是非常有用的。


## 总结Summary

I’m constantly and pleasantly surprised that for whatever little tool or demonstration I need, no matter how complex, Node.js greatly simplifies my life!

我经常愉快的因为他们而惊喜，无论小工具还是我需要阐述的那些，无论多复杂，Node.js极大的简化我的生活！

Node.js' event driven nature and wide support for extension via [NPM](http://npmjs.com/) allows me to quickly find and make use of even the most esoteric functionality I need. I often have a choice of esoteric libraries!

Node.js的事件驱动特性和通过扩展支持广泛的[NPM](http://npmjs.com/)，让我可以快速的查找和使用我需要的最多神秘功能。我经常可以选择神密的库。

I’d recommend learning Node.js to anyone working in IT today. Node.js can make your projects fly!

在IT今天，无论干什么工作，我都推荐你们学习Node.js。Node.js会让你的项目腾飞！