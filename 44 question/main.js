///this is rest parametre ...items is o lagane se ham func call krte hue jine mrzi argument dai error nh ataa
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items : \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nnow enjoy a sndwich");
}
//call the function 3 time with different arguments
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "mayo", "egg", "cheese", "chicken");
