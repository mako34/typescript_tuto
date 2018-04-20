
class Car {
    //field
    engine:string;

    //constructor
    constructor(engine:string){
        this.engine = engine
    }

    //function
    dips():void {
        console.log(`engine is: ${this.engine}`)
    }
}

//initialize
var carro = new Car("mustang 2000")
console.log(`el motor : ${carro.engine}`)
carro.dips()

// Inheritance
class Root {
    str:string;
}

class Child extends Root{}
class Leaf extends Child{}

var obj = new Leaf();
obj.str = "mako"
console.log(obj.str)

//inheritance & method overriding
class PrinterClass {
    doPrint():void{
        console.log("do print() from parent called...")
    }
}

class StringPrinter extends PrinterClass {
    doPrint():void {
        super.doPrint()
        console.log("doPrint() is printing a sting...")
    }
}

var objetus = new StringPrinter()
objetus.doPrint()

//Static keyword
class StaticMem {
    static num:number;

    static disp():void {
        console.log(`the value num is ${StaticMem.num}`)
    }
}

StaticMem.num = 12 //init static var
StaticMem.disp() //invoke static method

//Classes and interfaces
interface Iloan {
    interest:number
}

class AgriLoan implements Iloan {
    interest:number
    rebate:number

    constructor(interest:number, rebate:number){
        this.interest = interest
        this.rebate = rebate
    }

}

var objAgriLoan = new AgriLoan(10, 1);
console.log(`interest is: ${objAgriLoan.interest} and rebate is: ${objAgriLoan.rebate}`)
