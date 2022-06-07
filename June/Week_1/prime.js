var a= prompt("enter a number");

switch(a){
    case 1:
        console.log(2);
        break;
    case 2:
        console.log(3);
        break;
    default:
        nThPrimeNumber(a-2);
        break;
}
function nThPrimeNumber(num){
    let count=0;
    function checkPrime(num){
        var prime=true;
        for(i=2;i<a;i++){
            if(num%i==0){
                    prime=false;
            }
        }    
        return(prime);
    }
    for(let i=2;i<10000;i++){
        var prime= checkPrime(i);   
        if(prime==true){
            count=count+1;
        }
        if(count==num){
            console.log(i);
            break;
        }
    }
}