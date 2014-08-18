function MrDog(nickname) {

    this.nickname = nickname;

    this.greet = function () {
        return "Hello, I am " + this.nickname;
    }
};

module.exports = MrDog;
