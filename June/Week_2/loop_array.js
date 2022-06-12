//Q. In how many ways can we loop in an array describe each with an example ?
// for loop an array


//method-1
//  for example
let arr = [1,2,3,4,5];
let l= arr.length;
for (let i=0; i<l; i++){
    console.log(arr[i]);
}
console.log(arr);


//method-2
//for example
for(let elements of arr){
    console.log(elements);
}
console.log(arr);


// method-3
//for Example 
let index=0;
while(index<l){
    console.log(arr[index]);
    index++;
}
console.log(arr);
