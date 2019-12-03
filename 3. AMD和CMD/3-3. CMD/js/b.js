define(function (require, exports, module) {
    //模块内部的代码
    console.log("b模块的内部代码")
    module.exports = {
        name: "b模块",
        data: "b模块的数据"
    }
})