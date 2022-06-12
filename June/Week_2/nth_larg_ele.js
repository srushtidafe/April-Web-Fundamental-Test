// Q. Find the nth largest element in a sorted array 
var arr=[1,2,3,4,5,6,7,8,9,10];
let l= arr.length;
let x=0;

while(x == 0){
    for(let i=0; i<l; i++){

        if (arr[i] > arr[i+1]){
               let c = arr[i+1];
               arr[i+1] = arr[i];
                arr[i] = c;
            }

            if (check(arr) == true){
                x = 1;
              
             }

    }
}
console.log(arr);
   
function check(arr){
    let x=true;
    for(let i= 0;i<l;i++){

        if(arr[i]>arr[i+1]){
            x=false;
        }

    }
    return x;
}
check(arr)
//consider nth number=2
//answer=9
let n=1;
console.log('nth largest number is',arr[l-n]);