function getSecondLarge (nums){
    let max = Math.max(...nums);
    let restArray = nums.filter(num => num !== max);
    const secondLarge = Math.max(...restArray);
    return secondLarge;
}

getSecondLarge([2, 3, 6, 6, 5]);