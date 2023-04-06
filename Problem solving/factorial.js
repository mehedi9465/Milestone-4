function factorial(n){
    let temp = 0;
    let sum = 1;
    while(n){
        if(n>0){
            sum = sum * n;
            n--;
        }
    }
    console.log(sum);
}

factorial(3);