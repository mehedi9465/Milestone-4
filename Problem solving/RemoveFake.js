var name = ['Akhil', 'Tarique', 'Saleh', 'Rakib', 'Salim', 'Ashique', 'Mehedi', 'Tarique', 'Rony'];
const newArr = [];
for (let i = 0; i < name.length; i++){
    const temp = name[i];
    if(newArr.length === 0){
        newArr.push(temp)
    }
    else{
        if(!newArr.includes(temp)){
            newArr.push(temp);
        }
    }
}
console.log(newArr);