let apple ="apple";
let upperCaseApple ="APPLE";
let ten = 10;
let twenty = 20;
let fruits=["apple","mango","banana"];


//equality test
console.log("Is apple equal to apple?");
console.log(apple=="apple");

console.log("\n Is apple not equal to apple?");
console.log(apple!="apple");

//TEST USING LOWER CASE FUNCTION
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase()=="apple");

console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase()!="apple");
//numerical test
console.log("\nIs ten is equal to 20?");
console.log(ten==20);

console.log("\nIs ten is not equal to 20?");
console.log(ten!=20);

console.log("\nIs ten is greater then 0?");
console.log(ten>0);

console.log("\nIs 20 is less then 10");
console.log(twenty <10);

//greater then & equal to
console.log("\nIs ten is greater then or equal to 5 ");
console.log(ten>=5);

//less then or equal to
console.log("\nIs twenty is less then or equal to 10");
console.log(twenty<=10);

//tests using and & or operator
//using and &&
//&& and k operator mai dono condition true hogi tbhi true ans hoga or agar aik bhi false hoi to wo false dega
console.log("\ntwenty is not equal to 10 and twenty is greater then 10");
console.log(twenty!=10 && twenty>10);

console.log("\ntwenty is equal to 10 and twenty is greater then 30");
console.log(twenty!=10 && twenty>30);
//using or ||
//or k operator mai dono mai se koi aik cond bhi true hogo to ans true dega dono false hoi to false hoga answer
console.log("\nten is greater then 50 or ten is equal to 10");
console.log(ten>50 || ten==10);

console.log("\ntwenty is greater then 50 or twenty is not equal to 20")
console.log(twenty>50 || twenty!=20)

//test when item is included in arry
console.log("\n Is orange is included in arry?");
console.log(fruits.includes("orange"));
//not include
console.log("\nIs orange is not include in arry?");
console.log(!fruits.includes("orange"));
