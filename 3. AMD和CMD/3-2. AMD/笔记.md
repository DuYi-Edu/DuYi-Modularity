# AMD

全称是Asynchronous Module Definition，即异步模块加载机制

require.js实现了AMD规范

在AMD中，导入和导出模块的代码，都必须放置在define函数中

```js

define([依赖的模块列表], function(模块名称列表){
    //模块内部的代码
    return 导出的内容
})

```