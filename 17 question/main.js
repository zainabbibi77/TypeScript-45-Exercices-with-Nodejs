//phli guest list ye thii mai aik bnda busy tha to uski ki jagah kisi or ko invite krna tha,
var guestList = ["Hira", "Aamna", "Zaini"];
//dontcome mai usse likha jo nhi araha tha 0 se count kia us hisab se zaini nhi arahi thi
var dontCome = guestList[2];
//zaini ka msg tha i am busy
console.log(dontCome, "i am busy.");
//ab splice ka func replace k liye use hota hai 2 is liye k iski jagah ali lkhna or 3 is liye k jb ali likhe gai zaini 3 pai jaye to remove ho jae gi
guestList.splice(2, 3, "Ali");
guestList.forEach(function (guestName) { return console.log("Salam ".concat(guestName, ",would you like to dinner with me?")); });
//ab table barh gya ahi to 3 or guest askte hai phle msg print kia aik guest ko bh arry k ander bole gaetarike se ad krna hai niche jo likha hua ahi
console.log("Good News ! WE HAVE FOUD A BIG TABLE FOR DINNER");
//strat mai bnde ka nam add karwane k liye .unshift use hoga
guestList.unshift("Umer");
//sb se last mai arry k andr nam dalne kmliye .push 
guestList.push("Fatima");
//add a guest at middle of guestlist.....length ye kry ga k total sare nam count kre ga jo abhi new ad hue wo bhi or divide by 2
var middleIndex = Math.floor(guestList.length / 2);
//now for add a numb we use splice func
guestList.splice(middleIndex, 0, "Usama");
console.log("Updated list of our guest");
guestList.forEach(function (guestName) { return console.log("Salam ".concat(guestName, ", would you like to dinner with me ?")); });
//e...exercise 17 work start from here
console.log("unfortunately,the new dinner table not arrive on time,so i can invite only 2 guest for dinner.");
//list mai  guest remove krne k 2 bach jaye
//pop use for remove name from last or while mai bola hai remove krte rhna namjb tk 2 se zayada ho
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry,".concat(removeGuest, " i cant invite you for dinner"));
}
//baki 2 ko invite bhjna hai
console.log("Invitation for a last 2 guests");
guestList.forEach(function (lastTwo) { return console.log("luckly,".concat(lastTwo, " you are still invited for dinner")); });
//dimagh ghooma hua tha jo do rh gyy the unhe bhi nikl dia or guestlist khali krnoi thi 2 bachy the is liye 2 bar pp ka fun lagaya
guestList.pop();
guestList.pop();
//ab khali list print karwani ahi
console.log("Empty list:", guestList);
