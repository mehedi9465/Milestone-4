// const factorial = number =>{
//     let factorial = 1;
//     while (number) {
//         factorial = factorial * number;
//         number--;
//     }
//     return factorial;
// }

// console.log(factorial(6));

// Largest Element

// function LargestElement(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if(largest < numbers[i+1])
//             largest = numbers[i+1];
//         else
//             continue;
//     }
//     return largest;
// }

// Fibonacci series

// let number = [10, 20, 30, 40, 50, 10];
// const maxNum = LargestElement(number);
// // console.log(maxNum);

// let fibo = [0, 1];

// for(let i = 2; i < 10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
//     console.log('Added item is:', fibo[i]);
// }

// console.log(fibo);

// Reverse a String

// const names = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'];

// function reverseArray(numbers){
//     let reversed = [];
//     for( let i = numbers.length - 1; i >= 0; i--){
//         reversed.push(numbers[i]);
//     }
//     return reversed;
// }

// const finalArray = reverseArray(names);
// // finalArray.reverse();
// console.log(finalArray);

// Remove duplicate elements of an array

// const names = ['a7', 'a1', 'a2', 'a8', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a2', 'a5', 'a7',];

// function removeDuplicates(names){
//     let tempPot = [];
//     for(temp of names){
//         if(tempPot.indexOf(temp) == -1){
//             tempPot.push(temp);
//         }
//     }
//     return tempPot;
// }

// let finalArray = removeDuplicates(names);
// console.log(finalArray);



