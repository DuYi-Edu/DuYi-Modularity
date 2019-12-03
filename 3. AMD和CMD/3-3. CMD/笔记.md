# CMD

全称是Common Module Definition，公共模块定义规范

sea.js实现了CMD规范

在CMD中，导入和导出模块的代码，都必须放置在define函数中

```js

define(function(require, exports, module){
    //模块内部的代码
})

```