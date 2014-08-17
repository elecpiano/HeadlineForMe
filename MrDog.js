function MrDog(nickname) {

    this.nickname = nickname;

    this.greet = function () {
        document.write("Hello, I am " + this.nickname + "<br />")
    }
};

module.exports = MrDog;