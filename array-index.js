let numbers = [1,2,3,4,5,6,7];

// length 
console.log(numbers.length);


// search array single value by its index number 
let index = numbers[0];

console.log("Index of 0 : ",index)

// search array index number by its value 
let value = numbers.indexOf(4);
console.log("Index of value(4) : " , value);


let price = [10, 20, 30, 40, 50, 60, 70];
console.log(price);

// push 
price.push(80);
console.log(price);

// pop 
price.pop();
console.log(price);

// replace data 
price[3] = 200;
console.log(price)