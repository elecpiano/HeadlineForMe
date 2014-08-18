function MrDog(nickname) {

    this.nickname = nickname;

    this.greet = function () {
        return "Hello, I am " + this.nickname;
    }

    this.getHTML = function () {
        return "www.baidu.com";
    }
};

module.exports = MrDog;
