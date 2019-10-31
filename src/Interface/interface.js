"use strict";
exports.__esModule = true;
function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
    });
}
var result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 18 }
    ]
};
// render({
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B', age: 18 }
//     ]
// } as Result)
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 18 }
    ]
});
var chars = ['A', 'B'];
/**** interface to function */
var add2;
var add5 = function (a, b) { return a + b; };
function getLib() {
    var lib = (function () { });
    lib.version = '2.0';
    lib.doSomething = function () { };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomething();
var boy = {
    name: '',
    run: function () { },
    eat: function () { },
    cry: function () { }
};
