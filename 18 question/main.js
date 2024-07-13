var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["brazil", "saudia", "canada", "africa"];
console.log("Orignal Order:", countriesToVisit);
//now name of list in alphabatical oder ...[].sort() use for copying the upr wla arry change nh kare ga upr wale ko copy kare ga
console.log("Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("still in Orignal Order:", countriesToVisit);
//reverse alphabatical order copy hoga ...>dots hai is liye
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
//again we have to show that orignal arry
console.log("Still in Orignal Order:", countriesToVisit);
//now reverse orignal list without copying
console.log("Orignal Arry Reversed:", countriesToVisit.reverse());
//now we reverse line 16 back to orignal order
console.log("Back To Orignal Order:", countriesToVisit.reverse());
//NOW SORT LINE 1 IN ALPHABATICAL ORDER
console.log("Alphabatical Order:", countriesToVisit.sort());
//now sort line 1 in reverse alphanbatical order
console.log("Reverse Order:", countriesToVisit.reverse());
