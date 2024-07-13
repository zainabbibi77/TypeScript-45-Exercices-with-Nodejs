
//phli guest list ye thii mai aik bnda busy tha to uski ki jagah kisi or ko invite krna tha,

let guestList=["Hira","Aamna","Zaini"];

//dontcome mai usse likha jo nhi araha tha 0 se count kia us hisab se zaini nhi arahi thi

let dontCome=guestList[2];
//zaini ka msg tha i am busy
console.log(dontCome ,"i am busy.");
//ab splice ka func replace k liye use hota hai 2 is liye k iski jagah ali lkhna or 3 is liye k jb ali likhe gai zaini 3 pai jaye to remove ho jae gi

guestList.splice(2,3,"Ali");


guestList.forEach(guestName =>console.log(`Salam ${guestName},would you like to dinner with me?`));

//ab table barh gya ahi to 3 or guest askte hai phle msg print kia aik guest ko bh arry k ander bole gaetarike se ad krna hai niche jo likha hua ahi


console.log("Good News ! WE HAVE FOUD A BIG TABLE FOR DINNER");


//strat mai bnde ka nam add karwane k liye .unshift use hoga

guestList.unshift("Umer");
//sb se last mai arry k andr nam dalne kmliye .push 
guestList.push("Fatima");
//add a guest at middle of guestlist.....length ye kry ga k total sare nam count kre ga jo abhi new ad hue wo bhi or divide by 2
let middleIndex:number=Math.floor(guestList.length/2);
//now for add a numb we use splice func
guestList.splice(middleIndex,0,"Usama");
console.log("Updated list of our guest");
guestList.forEach(guestName =>console.log(`Salam ${guestName}, would you like to dinner with me ?`));
