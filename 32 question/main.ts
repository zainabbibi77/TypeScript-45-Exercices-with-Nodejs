let current_users=["Ali","Ariba","Usman","Zain","Hira"];

let new_users=["Sara","Sami","Zain","Hira","Zara"];


new_users.forEach(new_one_user=>{

//.some func ka yh kam hai 
// current user pai .some ka func hai to wo apni sari 5 values ko new_one_user ki phli value k sath compare kare ga 
// phr repaet mai dobara api 5 values ko new one user ki 2 value k sath compare kare ga aise isse pata chae ga k dono arrys mai kn si 
// values same hai
    let our_condition=current_users.some(current_one_user=>current_one_user.toLowerCase()===new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`This username ${new_one_user} is available`)
    }
})