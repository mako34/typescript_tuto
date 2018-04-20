function disp_details(id, name, mail_id) {
    console.log('disp_details');
    console.log('id:', id);
    console.log('nombre:', name);
    if (mail_id != undefined)
        console.log('emailio ', mail_id);
    console.log('**********');
}
disp_details(123, 'mako');
disp_details(43, 'tkt', 'mail@sa.net');
// REST PARAMETERS
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log('REST PARAMETERS / addNumbers');
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log('tu suma', sum);
    console.log('**********');
}
addNumbers(1, 2, 3);
addNumbers(10, 20, 52, 30, 52, 54, 55);
//Default parameters
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    console.log('Default parameters / calculate_discount');
    var discount = price * rate;
    console.log('Discount ammount: ', discount);
    console.log('**********');
}
calculate_discount(1000);
calculate_discount(1000, 0.3);
//Anonymous function
var msg = function () {
    console.log('Anonymous_function / function');
    return 'hola mundo';
};
console.log(msg());
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//FUNCTION CONSTRUCTOR
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
//RECURSION
function factorial(number) {
    console.log('RECURSION / function');
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
;
console.log(factorial(6));
//anonymous recursive function
// (function ( {
//     var x = "hiho";
//     console.log(x)
// }))()
// LAMBDA FUNCTIONS
// paremeters + fat arrow => (goes to operator) + statements
// ( [param1, param2, ...paramN] ) => statement
var foo = function (x) { return 10 + x; };
console.log(foo(100));
//LAMBDA_STATEMENT
var foo2 = function (x) {
    console.log('LAMBDA_STATEMENT / foo2');
    x = 10 + x;
    console.log(x);
    console.log('**********');
};
foo2(120);
//SYNTACTIC_VARIATIONS
var func = function (x) {
    console.log('SYNTACTIC_VARIATIONS / func');
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
    console.log('**********');
};
func(12);
func("mako");
//empty_param_lambda
var disp = function () {
    console.log('empty_param_lambda / disp');
    console.log("func called invoked");
    console.log('**********');
};
disp();
