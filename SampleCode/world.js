// same like the java class
// There is class
// world is function name

exports.world = function() {
    console.log('Hello World');
}

// Next Part

function hello() {
    var name = "";

    this.setName = function(StrName) {
        name = StrName;
    }

    this.siadHello = function() {
        console.log('Hello ' + name);
    }
}

module.exports = hello;