// function greeting(parameterVariable){
//     console.log('Hello, World!');
//     console.log(parameterVariable);
    
// }

// function main() {
//     const parameterVariable = readLine();
//     greeting(parameterVariable);
// }

// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6, 7, 8];
// const abc = [...arr, ...arr1];
// console.log(abc);

// const input  = 'I love Bangladesh';
// const arr = input.split(' ');
// const modified = [];
// arr.map(str => {
//     let newArr = str.split('').reverse();
//     newArr[0] = newArr[0].toUpperCase();
//     newArr = newArr.join('')
//     modified.push(newArr)
// })
// console.log(modified.join(' '));


// const input = ['a', 'b', 'a', 'z', 'd', 'c', 'b']
// const filter = (input) => {
//     const result = [];
//     input.forEach(value => {
//         if(result.indexOf(value) === -1){
//             result.push(value)
//         }
//     })
//     return result;   
// }
// const res = filter(input);

// console.log(res);

const input = [1, 1, 2, 1, 2];
const uniqueNums = [];
const obj = {  };
let max = 0;
input.forEach(value => {
    if(uniqueNums.indexOf(value) === -1){
        uniqueNums.push(value);
    }
})

uniqueNums.forEach(value => {
    const filtered = input.filter(num => num === value)
    obj[value] = filtered.length;
})

const loop = Object.keys(obj);
for(let i of loop){
    const filtered = loop.filter(val => val !== i)
    filtered.forEach(num => {
        if(obj[i] > obj[num]){
            max = i * obj[i];
        }
        else{
            max = num * obj[num];
        }
    })
}
console.log(max);