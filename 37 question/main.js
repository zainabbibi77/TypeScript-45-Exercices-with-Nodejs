function make_shirt(size, printMessege) {
    if (size === void 0) { size = "Large"; }
    if (printMessege === void 0) { printMessege = "I Love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessege, " prints on shirt."));
}
;
make_shirt();
make_shirt("medium");
make_shirt("small", "I love java");
