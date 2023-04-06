// Seer To Mon

function seerToMon(seer){
    if(typeof(seer) == 'string')
        return 'Please input numbers only';
    else if(seer < 0)
        return 'Please input positive numbers'
    else
        return seer / 40;
}

const weight = seerToMon(120);
console.log(weight);


// Total Sales

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    const shirt = 100, pant = 200, shoe = 500;
    let totalPrice = (shirt * shirtQuantity) + (pant * pantQuantity) + (shoe * shoeQuantity);
    return totalPrice;
}

const price = totalSales(2, 3, 5);
console.log(price);

// Delivery Cost 

function deliveryCost(shirtQuantity){
    let restQuantity = 0, price = 0;

    if(typeof(shirtQuantity) == 'string')
        return 'Please input numbers only';
    else if(shirtQuantity < 0)
        return 'Please input positive numbers'
    else if (shirtQuantity <= 100) {
        price = shirtQuantity * 100; 
        return price;
    }
    else{
        restQuantity = shirtQuantity - 100;
        price = price + 10000;
        if(restQuantity <= 100){
            price = price + (restQuantity * 80);
            return price;
        }
        else{
            restQuantity = restQuantity - 100;
            price = price + 8000;
            if(restQuantity > 0){
                price = price + (restQuantity * 50);
                return price;
            }
            return price;
        }
    }
}

const totalCost = deliveryCost(650);
console.log(totalCost);

// Perfect Friend

function perfectFriend(myFriends){
    for(let friend of myFriends){
        if(typeof(friend) == 'number'){
            return 'Input your Friends name';
        }
        else if (friend.length == 5) {
            return friend;
        }
    }
}

const myFriends = ['Rony', 'Jony', 'Jabbar','Mehedi', 'Tapu', 'Tutul', 'Ruhul', 'Tarikul', 'Rahat', 'Karim'];
const Friend = perfectFriend(myFriends);
console.log(Friend);