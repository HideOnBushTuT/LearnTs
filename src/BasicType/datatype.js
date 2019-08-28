//原始类型
var bool = true;
var num = 19;
var str = 'aaa';
//arr
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 4, '5'];
//tuple
var tuple = ['1', 1];
//func
var add = function (x, y) { return x + y; };
var compute;
compute = function (a, b) { return a + b; };
//object
var obj = { x: 1, y: 2 };
obj.x = 3;
//symbol
var s1 = Symbol();
var s2 = Symbol();
//undefined, null
var un;
var nu;
//void
var noReturn = function () { };
//any
var x;
x = 1;
x = [];
//never
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};
