
//Write a program to display the n terms of odd natural number and their sum.
let a = Number(prompt("Enter No.🤔"));
        let sum = 0;
        function  Odd(n1){
            log.console()
            for(i=1; i<=n1; i++){
                if(i%2 !== 0){
                    sum = sum+i;
                    log.console(i );  
                }
            }
            log.console(sum);
        }