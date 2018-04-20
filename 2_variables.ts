
var nombre:string = 'mako';
var puntaje:number = 100;
var puntaje2:number = 1000;
var sum = puntaje + puntaje2;

console.log('nombre:'+nombre)
console.log('puntaje total:'+sum)

//type assertion
var str = '1'
var str2:number = <number> <any> str //str is now type number .. cual es el punto any?

console.log(str2)
