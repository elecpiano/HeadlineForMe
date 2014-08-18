function MrDog(nickname) {

    this.nickname = nickname;

    this.greet = function () {
        return "Hello, I am " + this.nickname;
    }

    this.getHTML = function () {
        var fs = require('fs');
        return fs.readfileSync('1.html', 'utf-8');
    }
};

module.exports = MrDog;
