function printHello() {
    console.log("Hello World");
}
// setInterval(printHello, 2000);

process.on('exit', function(code) {
    setTimeout(() => {
        console.log("Code will be running.")
    }, 1000);

    console.log("Exit Code: " + code);
});

console.log("Program Running End");