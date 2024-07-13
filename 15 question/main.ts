let guestList=["Hira","Aamna","Zaini"];


let dontCome= guestList[2];
console.log(dontCome, "i am busy");

guestList.splice(2,3,"Ali");

guestList.forEach(guestName =>console.log(`Salam ${guestName},would you like to dinner with me?`));