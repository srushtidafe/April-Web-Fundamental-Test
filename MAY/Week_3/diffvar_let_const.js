//Explain difference between var/ let const by giving examples.

//var:-

//The scope of a var variable is functional scope.
//we can re-declare the variable.
//we can re-initialize the value.
//initialization and declaration can be done in new line.

//Example:-

var i = 20;
console.log(i);      
var c = 76.5;        
console.log(c);      

//let :-

//The scope of a let variable is block scope.
//we can re-initialize the value.
//But we can not re-declare the variable.
//initialization and declaration can be done in new line.

//Example:-

let a = 40;
console.log(a);

n = 60;
console.log(n);     
main = 70;          
console.log(main);

//const:-

//we can not re-declare the variable.
//we can not re-initialize the value also.
//But here, initialization and declaration should be done in same line.

//Example:-

const pi = 3.14;
                    
console.log(pi); 