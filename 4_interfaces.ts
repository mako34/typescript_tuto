interface Iperson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}

//implementation"?
var customer:Iperson = {
    firstName:"mako",
    lastName:"tkt",
    sayHi:():string => {return "hola q hace"}
}

console.log("customer obj");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi())

// simple Inheritance
interface Person {
    age:number
}

interface Musician extends Person {
    instrument:string
}

var drummer = <Musician>{}; //creador?
drummer.age = 27;
drummer.instrument = "congas";
console.log(`age: ${drummer.age}; with instrument: ${drummer.instrument}`);

// multiple inheritance
interface Iparent1 {
    v1:number
}

interface Iparent2 {
    v2:number
}

interface Child extends Iparent1, Iparent2 {}
var Iobj:Child = { v1:12, v2:23}
console.log(`value 1: ${this.v1} and value2: ${this.v2}`) // why undefined?

