function show_magician(magicians:string[]){
    magicians.forEach(name=>console.log(name));
};


//2 this function add the great before arry values
function make_great(magician:string[]){
   return magician.map(name=>`The great ${name}`);
}

let magician_names=["Ali","harry potter","zara"];

//making a copy of orignal array through slice

let copy_magician_names = magician_names.slice();

//is se ye hoga is copy arry mai bhi the great add hojay ga


let copy_magicians= make_great(copy_magician_names);

//show both arry orignal and copied
console.log("Orignal Arry \n");
show_magician(magician_names);

//copied
console.log("\nCopied arry \n");
show_magician(copy_magicians);