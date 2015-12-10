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
console.log(subObj);


subObj.prototype.getName = function () {
    return this.name;

}
subObj.getName();