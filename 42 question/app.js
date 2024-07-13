function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
//2 this function add the great before arry values
function make_great(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["Ali", "harry potter", "zara"];
//show_magician(magician_names);
var great1 = make_great(magician_names);
console.log(great1);
//for converting it into line by line
show_magician(great1);
