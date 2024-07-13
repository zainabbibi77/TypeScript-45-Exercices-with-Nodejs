var userName = ["Mahad", "Ali", "hira", "Admin", "Usman"];
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, " would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, " thankyou for logging in again"));
    }
});
