// Q. Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item.

let arr = ['geek','geekster', 'geeky'];
let l= arr.length;
for(let i=0; i<l; i++){

    if(arr[i]=='geekster'){
    
        for( let p=i; p<l-1; p++){
            arr[p]=arr[p+1];
        }
    }
}
arr.pop();
console.log(arr);