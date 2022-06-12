// Q. What will be returned if you look for the index of something that does not exist? 

var arr= ['a','b','c','d']; 
let l= arr.length;

for(let i=0; i<l; i++){

    if(arr[i]=='e'){
        console.log('index is ',i);
    }

}