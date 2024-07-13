var guestList = ["Hira", "Aamna", "Zaini"];
var dontCome = guestList[2];
console.log(dontCome, "i am busy");
guestList.splice(2, 3, "Ali");
guestList.forEach(function (guestName) { return console.log("Salam ".concat(guestName, ",would you like to dinner with me?")); });
