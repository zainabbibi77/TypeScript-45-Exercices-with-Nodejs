function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
//2 this function add the great before arry values
function make_great(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["Ali", "harry potter", "zara"];
//making a copy of orignal array through slice
var copy_magician_names = magician_names.slice();
//is se ye hoga is copy arry mai bhi the great add hojay ga
var copy_magicians = make_great(copy_magician_names);
//show both arry orignal and copied
console.log("Orignal Arry \n");
show_magician(magician_names);
//copied
console.log("\nCopied arry \n");
show_magician(copy_magicians);
