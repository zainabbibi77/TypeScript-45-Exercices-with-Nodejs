//Define a function to create a car object with optional functions...
function create_car(manufacturer,model,...options){
    //Initialize a car object with manufacturer and model
    let car = {
        //Key-value pairs:
        manufacturer:manufacturer,
        model:model,
    };
    //add aditional options to the car object:
    //split()function divides the string value  in to two parts:
    //trim()function is used for removing of wide spaces:
    options.forEach(option =>{
        let[key,value]=option.split(":");
        car[key.trim()] = value.trim();
        });

        return car;
}

//Call the function to create a car object:
let my_car = create_car("Toyota","Corolla","Color:Black","Sunroof:True");
console.log(my_car);