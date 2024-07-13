var userName = ["ali", "hira", "zeeshan", "admin", "zara"];
userName = [];
if (userName.length === 0) {
    console.log("your arry is empty we need to find some users!");
}
else {
    userName.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", thankyou for logging in again"));
        }
    });
}
