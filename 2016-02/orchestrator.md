# 开源Nodejs项目推荐gulp核心模块：Orchestrator

## Content

- 为什么要介绍这个模块？
- 简介和基本用法
- 它是如何做到以最大并发执行的?
- 作业依赖链是如何计算的？
- 事件回调
- 如何实现一个简易gulp？
- 最后点评一下

## Why？

gulp已经是nodejs用的最多，排名前10的著名模块了，而Orchestrator模块是gulp的核心模块，如果你也是gulp使用者，那么你有必要了解一下gulp的实现原理，以及为什么它比较快

依赖

https://github.com/gulpjs/gulp/blob/master/package.json#L36


代码

https://github.com/gulpjs/gulp/blob/master/index.js

```
'use strict';

var util = require('util');
var Orchestrator = require('orchestrator');
var gutil = require('gulp-util');
var deprecated = require('deprecated');
var vfs = require('vinyl-fs');

function Gulp() {
  Orchestrator.call(this);
}
util.inherits(Gulp, Orchestrator);

Gulp.prototype.task = Gulp.prototype.add;
Gulp.prototype.run = function() {
  // `run()` is deprecated as of 3.5 and will be removed in 4.0
  // Use task dependencies instead

  // Impose our opinion of "default" tasks onto orchestrator
  var tasks = arguments.length ? arguments : ['default'];

  this.start.apply(this, tasks);
};
```

中

```
function Gulp() {
  Orchestrator.call(this);
}
util.inherits(Gulp, Orchestrator)
```

这里说明Gulp继承自Orchestrator

```
Gulp.prototype.task = Gulp.prototype.add;
```

这里很明显gulp里的task方法就是Orchestrator里的add方法的别名。其他依此类推，大家去源码里翻吧。

so，我才说它是gulp核心模块的。

## Intro

https://github.com/robrich/orchestrator

A module for sequencing and executing tasks and dependencies in maximum concurrency

翻译过来的意思

- sequencing 顺序
- executing tasks 执行任务
- dependencies 支持依赖任务

最后一句才是最牛最核心的的：in maximum concurrency即以最大的并发能力来执行

## Usage

1） Get a reference:

```
var Orchestrator = require('orchestrator');
var orchestrator = new Orchestrator();
```

reference是对象引用，也就是实例化Orchestrator对象的方式。

2） Load it up with stuff to do:

```
orchestrator.add('thing1', function(){
  // do stuff
});
orchestrator.add('thing2', function(){
  // do stuff
});
```

给orchestrator实例增加要执行的task（任务），add方法就2个参数

- 参数1：是任务名称
- 参数2：是具体要做的事儿，即task具体内容

简而言之：作业定义

stuff这个词的意思是： 填塞，填充；塞入

3） Run the tasks:

```
orchestrator.start('thing1', 'thing2', function (err) {
  // all done
});
```

这个就没啥好说的，执行任务，上面定义了'thing1', 'thing2'，需要在start里运行才可以执行。

另外api还有关于promise和stream的支持



## 它是如何做到以最大并发执行的?

看着挺吓唬人的，什么以最大并发，其实也很简单

见源码

https://github.com/robrich/orchestrator/blob/master/index.js

```
var Orchestrator = function () {
	EventEmitter.call(this);
  
  // call this when all tasks in the queue are done
	this.doneCallback = undefined; 
  
  // the order to run the tasks
	this.seq = []; 
  
  // task objects: name, dep (list of names of dependencies), fn (the task to run)
	this.tasks = {}; 
  
  // is the orchestrator running tasks? .start() to start, .stop() to stop
	this.isRunning = false; 
};
```

这里的this上定义的4个变量是最核心的，其实和并发执行有关的seq

```
  // the order to run the tasks 
	this.seq = []; 
```

js的数组`[]`是非常灵活的数据结构，它既可以队列也可以栈，如果不明白，自己去补基础。

注释上说，用于保存执行task的顺序，为什么这么说呢？

- task是通过this.tasks定义
- start里会有多个task
- 每个task又有可能有多个依赖
- 每个依赖又可能有多个依赖

所以如果执行多个tasks，你肯定要把里面的所有tasks放到seq这个队列里。在队列里的好处是，如果计算机有能力执行，它就从队列里取走一个，如果还有能力就再取走一个，所以这其实是in maximum concurrency即以最大的并发能力来执行。

上面讲了各种作业和作业依赖的问题，那么如果依赖里还有依赖，依赖的依赖里还有依赖，那么这个执行链还怎么计算呢？

## 作业依赖链是如何计算的？

答案见sequencify模块，其实就是一个简单的递归

源码见 https://github.com/robrich/sequencify


## 事件回调

```
var events = ['start','stop','err','task_start','task_stop','task_err','task_not_found','task_recursion'];
```

具体实现

```
var Orchestrator = function () {
	EventEmitter.call(this);
  
  // call this when all tasks in the queue are done
	this.doneCallback = undefined; 
  
  // the order to run the tasks
	this.seq = []; 
  
  // task objects: name, dep (list of names of dependencies), fn (the task to run)
	this.tasks = {}; 
  
  // is the orchestrator running tasks? .start() to start, .stop() to stop
	this.isRunning = false; 
};
```

看这句

```
EventEmitter.call(this);
```

此处比较简单，在nodejs这样是非常常见的处理方式。此处不细讲了，需要注意的是onAll的实现

```
// FRAGILE: ASSUME: this list is an exhaustive list of events emitted
var events = ['start','stop','err','task_start','task_stop','task_err','task_not_found','task_recursion'];

var listenToEvent = function (target, event, callback) {
	target.on(event, function (e) {
		e.src = event;
		callback(e);
	});
};

Orchestrator.prototype.onAll = function (callback) {
	var i;
	if (typeof callback !== 'function') {
		throw new Error('No callback specified');
	}

	for (i = 0; i < events.length; i++) {
		listenToEvent(this, events[i], callback);
	}
};
```

- listenToEvent是监听某一个事件
- onAll是不管events里的那个就监听

## 如何实现一个简易gulp？

```
gulp.task('default', function() {
  // place code for your default task here
});
```

然后后执行`gulp default`就会调用default task。

如果换成是orchestrator呢？

```
var Orchestrator = require('orchestrator');
var orchestrator = new Orchestrator();

orchestrator.add('hello', function(){
  // do stuff
  console.log('this is hello task...\n');
});

orchestrator.add('default', function(){
  // do stuff
  console.log('this is default task...\n');
});

module.exports = orchestrator;
```

然后写个命令行，解析里面的argv来执行

```
  #!/usr/bin/env node

  var argv = process.argv;
  argv.shift();
  argv.shift();

  console.log(argv + '\n');

  console.log('start\n');

  var gulp = require('./task')

  gulp.start(argv, function(){
    console.log('end');
  })
```

然后测试

```
node index.js default 
```

or

```
➜  mygulp git:(master) ✗ node index.js default hello
default,hello

start

this is default task...

this is hello task...

end

```

剩下的就是通过npm实现cli功能处理了。

那么作业依赖呢？

```
gulp.task('images', ['clean'], function() {
  ...
});
```

在task.js里

```
orchestrator.add('dep', ['hello'], function(){
  // do stuff
  console.log('this is default task...\n');
});
```

然后执行

```
➜  mygulp git:(master) ✗ node index.js dep     
dep

start

this is hello task...

this is default task...

end

```

## 点评

- 代码不多，但东西比较多
- 另外api还有关于event，promise和stream等的支持，
- 遵循node的小而美哲学
- 测试mocha+should测试用例非常丰富，
- 文档，代码都比较规范

在某些依赖key:function的场景下，Orchestrator是一个非常的选择。另外以最大并发跑task的特性也是大的实用场景。


全文完

欢迎关注我的公众号【node全栈】

![node全栈.png](//dn-cnode.qbox.me/FtALxsauUkYDGdzcuA5y6BaIdUMC)


如果想参与评论，请点击原文链接，进入国内最专业的cnode论坛