
//nodejs中导入模块，使用相对路径，并且必须以./或../开头
var util1 = require("./util.js")
var util2 = require("./util.js")
console.log(util1 === util2);
require("./b")
require("./b")
require("./b")
require("./b")
