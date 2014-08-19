var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('Hello World\n');
    uploadData();
    res.end(getHtml());
}).listen(port);

function dogGreet() {
    var MrDog = require("./MrDog");
    var dog = new MrDog("DoggyDoggy");
    return dog.greet();
}

function getHtml() {
    var fs = require("fs");
    return fs.readFileSync("./1.html", "utf-8");
}

function uploadData() {
    var AV = require("./av.js");
    AV.initialize("3bxcmnvlwxjskd0x71e969hqyect81wiiblw3tcwfhn1otka", "mecdoesr8l8op6anajajykoakd8e2lcw62sh1bs6vcj2ts5x");
    var TestObject = AV.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({ foo: "bar" }, {
        success: function (object) {
        }
    });
}
