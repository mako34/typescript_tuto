//OOP
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log('hola mundo');
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
