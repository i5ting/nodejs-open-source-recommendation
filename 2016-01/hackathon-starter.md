# 开源Nodejs项目推荐【Node.js web模板】：hackathon-starter


hackathon-starter是github上一个star过万的项目，技术栈

后端

- node/express
- mongodb（mongoose）
- mocha

算典型的MEAN架构（少angularjs），技术栈整体是比较经典的。参加[Node.js最新Web技术栈（2015年5月）](https://cnodejs.org/topic/55651bf07d4c64752effb4b1)

前端是传统web框架

- bootstrap
- jquery
- sass

除了sass稍高级点，基本没什么难度。

## 源码

A boilerplate for Node.js web applications http://hackathonstarter.herokuapp.com

https://github.com/sahat/hackathon-starter

## 前置条件

安装

- MongoDB 稳定版
- Node.js 稳定版
- nrm 切换npm源，加速安装npm模块

推荐的2个教程

- [Getting Started With Node.js, Express, MongoDB.](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/)
- [Node.js and Express 101需要翻墙](https://www.youtube.com/watch?v=BN0JlMZCtNU)

## 安装

Install via npm:

```bash
  # Get the latest snapshot
  git clone --depth=1 https://github.com/sahat/hackathon-starter.git myproject

  # Change directory
  cd myproject
  
  # Use taobao as npm Registry
  nrm use taobao

  # Install NPM dependencies
  npm install

  node app.js
```


## 功能点

- **本地授权** using Email and Password
- **OAuth 1.0a 授权** via Twitter
- **OAuth 2.0 授权** via Facebook, Google, GitHub, LinkedIn, Instagram
- Flash notifications
- MVC项目结构
- Node.js 集群支持
- Sass stylesheets (通过中间件自动编译)
- Bootstrap 3 + Extra Themes
- Contact Form (powered by Mailgun, Sendgrid or Mandrill)
- **Account Management**
 - Gravatar
 - Profile Details
 - 修改密码
 - 忘记密码
 - 重置密码
 - Link multiple OAuth strategies to one account
 - 账户删除
- CSRF保护
- **API Examples**: Facebook, Foursquare, Last.fm, Tumblr, Twitter, Stripe, LinkedIn and more.

## 本地授权


## mongoose技巧

## 测试技巧

## OAuth 2.0 授权（使用passpord）

## Flash notifications


## 所谓的mvc

## 集群支持


## Sass stylesheets (通过中间件自动编译)




## 点评

- 技术栈比较经典，传统，是学习MEAN比较好的入门教程
- 代码和目录结构也比较简单，没有特殊的技巧，比如用户密码加盐处理、测试等都是正规做法
- mongoose只有1个user model，是比较好的入门教材
- 集成passport.js做oauth授权
- 一些比较好的技巧，比如session，flash，sass中间件等

整体来说，是学习MEAN比较好一个不错的选择。但它的代码和目录结构等还不是特别好，这也算美中不足吧，真实项目不推荐这样写。


全文完

欢迎关注我的公众号【node全栈】

![node全栈.png](//dn-cnode.qbox.me/FtALxsauUkYDGdzcuA5y6BaIdUMC)


如果想参与评论，请点击原文链接，进入国内最专业的cnode论坛