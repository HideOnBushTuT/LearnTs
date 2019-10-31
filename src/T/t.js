function log(value) {
    console.log('T:', value);
    return value;
}
log(['a', 'b']);
log(['c', 'd']);
var myLog;
myLog('1');
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.run = function (value) {
        console.log(value);
        return value;
    };
    return Log;
}());
var log1 = new Log();
log1.run(1);
var log2 = new Log();
log2.run('b');
