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
                     

//What is the difference between null , undefined and not defined

//null:-

//The code suggests that the variable is empty at the moment and may have a value later
//Null is a reserved keyword in javascript.                   
//Example:-

let d  = null;
console.log(d);    



//undefined:-

//If a variable is declared but the value is not assigned, then the value of that variable will be undefined.
// Un-defined: when no value is Assigned to a variable, the value is called "un-defined".
//Example:-

let j;
console.log(j); 




//not defined:-

//Not-defined: when the variable is not present in your code, the value is called "not-defined".
//Example:-

//console.log(k); 


// What is initialisation and declaration? Check if for a given length and breadth, is the shape a square or rectangle

let l = 10;
let b = 20;
// shape of rectangle
if( l === b){
    console.log('It is a square');
}
//shape of square
else{
    console.log('It is a rectangle');
}

//Check if a number is odd or even using if-else statement.

let s= 4;
if(s % 2===0){
    console.log('Number is even');
}
else{
    console.log('Number is odd');
}



//Using SWITCH statement, get the day of the week based on day number, 

let num = 3;
switch (num){
    case 1:
        day1 = 'Sunday';
        console.log(day1 );
        break;
    case 2:
        day2 = 'Monday';
        console.log(day2 );
        break;
    case 3:
        day3 = 'Tuesday';
        console.log(day3 );
        break;
    case 4:
        day4 = 'Wednesday';
        console.log(day4 );
        break;
    case 5:
        day5 = 'Thursday';
        console.log( day5);
        break;
    case 6:
        day6 = 'Friday';
        console.log(day6 );
        break;
    case 7:
        day7 = 'Saturday';
        console.log( day7);
        break;
}