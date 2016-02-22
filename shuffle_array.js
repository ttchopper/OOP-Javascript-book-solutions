Array.prototype.shuffle = function () {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        var currElem = this[i];
        var rand = Math.floor(Math.random() * this.length);
        this[i] = this[rand];
        this[rand] = currElem;
    }
    return this;
}
