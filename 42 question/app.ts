function show_magician(magicians:string[]){
    magicians.forEach(name=>console.log(name));
};


//2 this function add the great before arry values
function make_great(magician:string[]){
   return magician.map(name=>`The great ${name}`);
}

let magician_names=["Ali","harry potter","zara"];

//show_magician(magician_names);

let great1 =make_great(magician_names);
console.log(great1);
 //for converting it into line by line
 show_magician(great1);



 //agar hm return ki jagah uper make_great wale mai name=> k agee console.log laga le ye kam direct hojy ga