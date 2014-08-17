var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello World\n');
    res.end(dogGreet());
}).listen(port);

function dogGreet() {
    var MrDog = require("./MrDog");
    var dog = new MrDog("DoggyDoggy");
    return dog.greet();
}
