// define(["b"], function(b){
//     console.log("a模块的内部代码")
//     return "a模块的内容";
// })

define(function (require, exports, module) {
    var b = require("b")
    console.log("a模块的内部代码", b)
    module.exports = "a模块的内容"
})