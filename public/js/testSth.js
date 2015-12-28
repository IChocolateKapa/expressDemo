/**
 * Created by Echo on 2015/12/9.
 */
/**
 * javascript 引擎执行函数会做两轮操作
 * 第一轮：
 *      1.声明并初始化函数参数
 *      2.声明局部变量，包括将匿名函数赋给一个局部变量，但并不初始化它们
 *      3.声明并初始化函数
 * */


var a = "123456";

function saySth () {
    console.log(a); //输出 "undefined"
    var a = "uuuuu";
    console.log(a); //输出 "uuuuu"
}

function saySth2 () {
    console.log(a); //输出 "undefined"
    var a;
    console.log(a); //输出 "undefined"
}

function doSth (a) {
    console.log(a); // 输出 "jjjjj"
    var a = "kkkkk";
    console.log(a); // 输出 "kkkkk"
}

function doSth2 (a) {
    console.log(a); // 输出 "jjjjj"
    var a;//单纯声明，多余
    console.log(a); // 输出 "jjjjj"
}

//saySth2();
//doSth2("jjjjj");


/**
 * 函数的继承
 * */
function parentFunc () {
    function setName () {
        this.name = true;
    }
}

function subFunc () {
  //parentFunc.call(this);

}

subObj = new subFunc();
//console.log(subObj);


/*subObj.prototype.getName = function () {
    return this.name;

}*/
//subObj.getName();


/*正则表达式 -测试-*/
var password = "234643er";
if (/\d/.test(password)
    && /[A-Z]/.test(password)
    && /[a-z]/.test(password) ) {

    //变绿
    console.log("true");
} else {
    console.log("false");
}
/*正则表达式 -测试-*/





function a () {
    console.log(3);
}
if (3 < 2) {
    function a() {
        console.log(4);
    }
    console.log(6);
}
a();//执行结果， 不可思议的 是 ： 4
// anyone can explain?
//ok, no one, then, i will
// 从本文件一开始， 就说明了， js对于函数内部的 变量和函数的提升
//在script标签内包着的代码， 执行环境是 全局环境
// 所以， js引擎会把两个a 函数提升至全局环境初始， 由于if 语句处于第一个a之后， 所以， 变量提升后， 后面的声明会覆盖掉前面的
//在引擎眼中， a的定义时 打印 4 这个方法。
//此坑【不算坑， 只能说没吃透js的机制】，初次发现是在 银翼项目中， 当某个开关开启时， Require一个其它模块；线上是关闭这个开关，并且没有上传这个模块文件的。理论上感觉应该没问题。结果报错 ，找不到那个未上传的模块。于是乎， 少华大大让俺更深记住了这个问题