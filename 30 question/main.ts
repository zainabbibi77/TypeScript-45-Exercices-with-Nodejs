let userName =["Mahad","Ali","hira","Admin","Usman"];

userName.forEach(oneuser=>{

if(oneuser==="Admin"){
   console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }
else{
    console.log(`Hello ${oneuser}, thankyou for logging in again`)
}    

})