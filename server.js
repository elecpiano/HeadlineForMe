var http = require('http')
var port = process.env.PORT || 1337;
var URL = require('url');

var AV = require('avoscloud-sdk').AV;
AV.initialize("3bxcmnvlwxjskd0x71e969hqyect81wiiblw3tcwfhn1otka", "mecdoesr8l8op6anajajykoakd8e2lcw62sh1bs6vcj2ts5x");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('Hello World\n');
    //res.end(getHtml());

    var args = URL.parse(req.url,true);
    if(!args.query.param1){
		res.end(getHtml());
	}
	else{
		res.end(args.query.param1);	
	}
    
}).listen(port);

function dogGreet() {
    var MrDog = require("./MrDog");
    var dog = new MrDog("DoggyDoggy");
    return dog.greet();
}

function getHtml() {
    uploadData();
    var fs = require("fs");
    return fs.readFileSync("./1.html", "utf-8");
}

function uploadData() {
    var TestObject = AV.Object.extend("TestObject2");
    var obj = new TestObject();
    obj.set("column1", 123);
    obj.set("column2", "abc");
    obj.save(null, {
        success: function (obj) {
            // Execute any logic that should take place after the object is saved.

        },
        error: function (obj, error) {
            // Execute any logic that should take place if the save fails.
            // error is a AV.Error with an error code and description.

        }
    });
}
