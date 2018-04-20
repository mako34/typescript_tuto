//implementation"?
var customer = {
    firstName: "mako",
    lastName: "tkt",
    sayHi: function () { return "hola q hace"; }
};
console.log("customer obj");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var drummer = {}; //creador?
drummer.age = 27;
drummer.instrument = "congas";
console.log("age: " + drummer.age + "; with instrument: " + drummer.instrument);
var Iobj = { v1: 12, v2: 23 };
console.log(this.v1);
console.log("value 1: " + this.v1 + " and value2: " + this.v2);
