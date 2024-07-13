//Define a function to create a car object with optional functions...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacturer and model
    var car = {
        //Key-value pairs:
        manufacturer: manufacturer,
        model: model,
    };
    //add aditional options to the car object:
    //split()function divides the string value  in to two parts:
    //trim()function is used for removing of wide spaces:
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object:
var my_car = create_car("Toyota", "Corolla", "Color:Black", "Sunroof:True");
console.log(my_car);
