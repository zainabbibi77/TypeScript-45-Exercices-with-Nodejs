let userName =["ali","hira","zeeshan","admin","zara"];

userName =[]

if(userName.length===0){
    console.log("Your arry is empty we need to find some users!");
}
else{
    
userName.forEach(oneuser=>{

    if(oneuser==="admin"){
       console.log(`Hello ${oneuser}, would you like to see a status report?`)
        }
    else{
        console.log(`Hello ${oneuser}, thankyou for logging in again`)
    }    
    
    })
}