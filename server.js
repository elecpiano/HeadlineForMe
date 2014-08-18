var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('Hello World\n');
    res.end(getHtml());
}).listen(port);

function dogGreet() {
    var MrDog = require("./MrDog");
    var dog = new MrDog("DoggyDoggy");
    return dog.greet();
}

function getHtml() {
    var fs = require("fs");
    fs.readfileSync("./1.html", "utf-8");
}
