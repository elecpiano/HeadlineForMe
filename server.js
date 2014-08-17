var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    dogSayHello();
}).listen(port);

function dogSayHello() {
    var MrDog = require("./MrDog");
    var dog = new MrDog("DoggyDoggy");
    dog.greet();
}
