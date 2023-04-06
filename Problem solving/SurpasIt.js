function calculateProcess(input){
    
    let total = 0;
    total += input[0];
    let n = 0;
    
    while(total <= input[3]){
        let increaseCount = total * (input[1]/100);
        total += input[2];
        total += increaseCount;
        n++;
    }

    console.log(n);
}

const data = [1500, 5, 100, 5000];

calculateProcess(data);