# 开源Nodejs项目推荐：无任何依赖的string操作库


![](https://github.com/dleitee/strman/raw/master/strman.png?raw=true)

strman是无任何依赖的string操作库，前后端通用


A Javascript string manipulation library without npm dependences.

## 安装

```
npm install strman --save
```

或者

```
bower install strman
```

## 用法

With ES6/import


```
import {slugify} from 'strman';

let title = "A Javascript string manipulation library.";
let result = slugify(title);
// result => "a-javascript-string-manipulation-library"
```


With require

```
var slugify = require('strman').slugify;

let title = "A Javascript string manipulation library.";
let result = slugify(title);
// result => "a-javascript-string-manipulation-library"
```

With Browser

```
  <script src="./bower_components/strman/dist/strman.js"></script>
  var result = _s.isString('strman');
  // result => true
```

Also available for AMD


## API

  - [x] [append](https://github.com/dleitee/strman#appendvalue-append)
  - [x] [appendArray](https://github.com/dleitee/strman#appendarrayvalue-append--)
  - [x] [at](https://github.com/dleitee/strman#atvalue-index)
  - [x] [between](https://github.com/dleitee/strman#betweenvalue-start-end)
  - [x] [chars](https://github.com/dleitee/strman#charsvalue)
  - [x] [collapseWhitespace](https://github.com/dleitee/strman#collapsewhitespacevalue)
  - [x] [contains](https://github.com/dleitee/strman#containsvalue-needle-casesensitive--true)
  - [x] [containsAll](https://github.com/dleitee/strman#containsallvalue-needles---casesensitive--true)
  - [x] [containsAny](https://github.com/dleitee/strman#containsanyvalue-needles---casesensitive--true)
  - [x] [countSubstr](https://github.com/dleitee/strman#countsubstrvalue-substr-casesensitive--true-allowoverlapping--false)
  - [x] [endsWith](https://github.com/dleitee/strman#endswithvalue-search-positionnull-casesensitivetrue)
  - [x] [ensureLeft](https://github.com/dleitee/strman#ensureleftvalue-substr-casesensitivetrue)
  - [x] [ensureRight](https://github.com/dleitee/strman#ensurerightvalue-substr-casesensitivetrue)
  - [x] [first](https://github.com/dleitee/strman#firstvalue-n)
  - [x] [indexOf](https://github.com/dleitee/strman#indexofvalue-needle-offset--0-casesensitivetrue)
  - [x] [insert](https://github.com/dleitee/strman#insertvalue-substr-index)
  - [x] [isLowerCase](https://github.com/dleitee/strman#islowercasevalue-n)
  - [x] [isString](https://github.com/dleitee/strman#isstringvalue)
  - [x] [isUpperCase](https://github.com/dleitee/strman#isuppercasevalue-n)
  - [x] [last](https://github.com/dleitee/strman#lastvalue-n)
  - [x] [lastIndexOf](https://github.com/dleitee/strman#lastindexofvalue-needle-offset--0-casesensitivetrue)
  - [x] [leftPad](https://github.com/dleitee/strman#leftpadvalue-length-char)
  - [x] [leftTrim](https://github.com/dleitee/strman#lefttrimvalue)
  - [x] [length](https://github.com/dleitee/strman#lengthvalue)
  - [x] [prepend](https://github.com/dleitee/strman#prependvalue-prepend)
  - [x] [prependArray](https://github.com/dleitee/strman#prependarrayvalue-prepend--)
  - [x] [removeLeft](https://github.com/dleitee/strman#removeleftvalue-prefix-casesensitivetrue)
  - [x] [removeNonChars](https://github.com/dleitee/strman#removenoncharsvalue)
  - [x] [removeNonWords](https://github.com/dleitee/strman#removenonwordsvalue-replace)
  - [x] [removeRight](https://github.com/dleitee/strman#removerightvalue-suffix-casesensitivetrue)
  - [x] [removeSpaces](https://github.com/dleitee/strman#removespacesvalue-replace)
  - [x] [repeat](https://github.com/dleitee/strman#repeatvalue-multiplier)
  - [x] [replace](https://github.com/dleitee/strman#replacevalue-search-newvalue-casesensitivetrue)
  - [x] [reverse](https://github.com/dleitee/strman#reversevalue)
  - [x] [rightPad](https://github.com/dleitee/strman#rightpadvalue-length-char)
  - [x] [rightTrim](https://github.com/dleitee/strman#righttrimvalue)
  - [x] [safeTruncate](https://github.com/dleitee/strman#safetruncatevalue-length-append)
  - [x] [shuffle](https://github.com/dleitee/strman#shufflevalue)
  - [x] [slice](https://github.com/dleitee/strman#slicevalue-beginslice-endslice)
  - [x] [slugify](https://github.com/dleitee/strman#slugifystring)
  - [x] [split](https://github.com/dleitee/strman#splitvalue-separator-limit)
  - [x] [startsWith](https://github.com/dleitee/strman#startswithvalue-search-position0)
  - [x] [substr](https://github.com/dleitee/strman#substrvalue-start-length)
  - [x] [surround](https://github.com/dleitee/strman#surroundvalue-substr)
  - [x] [toCamelCase](https://github.com/dleitee/strman#tocamelcasevalue)
  - [x] [toDecamelize](https://github.com/dleitee/strman#todecamelizevalue-chr)
  - [x] [toKebabCase](https://github.com/dleitee/strman#tokebabcasevalue)
  - [x] [toLowerCase](https://github.com/dleitee/strman#tolowercasevalue)
  - [x] [toSnakeCase](https://github.com/dleitee/strman#tosnakecasevalue)
  - [x] [toStudlyCaps](https://github.com/dleitee/strman#tostudlycapsvalue)
  - [x] [toUpperCase](https://github.com/dleitee/strman#touppercasevalue)
  - [x] [trim](https://github.com/dleitee/strman#trimvalue)
  - [x] [truncate](https://github.com/dleitee/strman#truncatevalue-length-append)
  
## 说明

npm依赖分2种，常规依赖和dev依赖。

strman没有任何常规依赖，也就是它自己说的：“without npm dependences”，但它是es 6语法，借助babel开发的，这是开发阶段使用的依赖

看一下它的package.json

```
"main": "dist/strman.js",
```

dist是压缩后的目录，也就是说它的模块主文件是压缩后的。

根目录里有一个gulpfile.babel.js用于压缩混淆，这就很明显了


```
gulp.task('browserify', () => {
  browserify({
    entries: './src/strman.js',
    transform: [babelify, es6ify, deglobalify],

    // Generate a UMD bundle for the supplied export name.
    // This bundle works with other module systems and sets the name
    // given as a window global if no module system is found.
    standalone: '_s',

    // Enable source maps that allow you to debug your files
    // separately.
    debug: true
  })
  .bundle()
  .pipe(source('strman.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('public'));
});
```

## 总结

目前看是基于mocha和chai的测试，基本ok，集成了travis-ci，但无测试覆盖率，无benchmark，性能如何还不好说

从开源到今天（4月24日），才12天，已经754个star，还算是不错的了，想参与的可以去贡献一下。另外要说的是它是学习es6的非常好的范例，推荐。


全文完

欢迎关注我的公众号【node全栈】

![node全栈.png](//dn-cnode.qbox.me/FtALxsauUkYDGdzcuA5y6BaIdUMC)


如果想参与评论，请点击原文链接，进入国内最专业的cnode论坛

