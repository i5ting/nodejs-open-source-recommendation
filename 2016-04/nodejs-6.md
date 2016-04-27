# 2016-04-26发布Node.js 6.0版本

在放出Node.js 5.0之后半年多时间，Node.js基金会于2016-04-26发布了Node.js 6.0版本，并对6.0版本提供长达2年的长期支持（LTS）的计划

根据Node.js基金会LTS计划， Node.js 6.x在2018年4月之前都会提供官方支持，并且2019年4月前还会维护更新的。

## 核心变化

- v8 升级到 5.0.71.35
- Node.js 6 covers 93% of all ES6 features
- 新的模块加载系统比4.x快4倍
- 建议抛弃0.10和0.12，切换到4.x
- 如果喜欢尝鲜，可以使用6.x，产品环境应用，建议最好是等stable之后

## 如何看待Node.js v5?

Node.js v5 在接下来的2个月还会继续支持的，这样就可以给当前使用v5开发者时间切换到Node.js v6版本上

温馨提示，可以尝鲜，但正式环境最好还是稍晚一点，这个更安全一些，2个月后就可以考虑了

## Current? What happened to Stable?

你可能会注意到v6发布使用的标签是Current,而不是Stable。这个名字变更是为了更好的区分当前活跃开发分支里的长期支持版本。 We will be using the Current label from here-on instead of Stable.


## 抛弃 Node.js v0.10 和 v0.12

如果当前你仍然在使用Node.js v0.10 或 v0.12，是时候转到v4 或 v6。v0.10 和 v0.12 版本会被考虑进入维护模式了。也就是说今年就会完全不提供支持计划了（Version 0.10 and 0.12 will only receive maintenance updates until October 2016, and December 2016 respectively, when they'll reach EoL (End of Life)）。

尽快切换吧，好处非常多，内存，性能都有大幅度提升

伴随今天的发布，基金会已经停止了老的0.12的分支的长期支持计划。官方目前支持的是 4.x 和 6.x。之前声明5.x会当测试版本，合并到6.x特性里。

Node.js 4.x的长期支持计划会在2017年4月终止，所以有足够时间用于切换到6.x版本。0.10和0.12版本仅维护更新到2016年10月份，并在2016年12月份分别走到他们生命的尽头EoL (End of Life)。

基金会专家说Node.js 4.x依然是产品阶段推荐的Node.js使用版本，而新近的Node.js 6.x版本应在stable版本的时候再考虑使用，但也会包含非常多的新的JavaScript特性，这些特性还没有完全在产品环境测试，无法保证他们完全程度。

站在此时此刻来看，Node.js开发者应该使用Node.js 4.x版本，如果他们需要的是稳定性和复杂产品环境考验过的话。使用Node.js 6.x的情况是如果他们有能力快速升级版本，并想要体验最新的特性。

## Node.js 6 covers 93% of all ES6 features

Node.js组去年6月曾吹支持93%的ECMAScript 6 (JavaScript 2015) 规范，可Node.js 5.x只是支持56%的ES6 规范。


该组也确实以它们的新的模块加载系统为豪，因为它说它们现在比Node.js 4.x版本要快上4倍。

其他在Node.js 6的显著变化是切换到Google's V8 version 5.0 作为 Node的JavaScript引擎，这就导致了批量bug修复和性能提升。

Node.js LTS plan

![](https://github.com/nodejs/LTS/raw/master/schedule.png)
