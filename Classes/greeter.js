var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello' + this.greeting;
    };
    return Greeter;
}());
console.log('run greeter');
var greeter = new Greeter(' brian');
console.log(greeter.greet());
