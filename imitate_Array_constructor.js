function MyArray() {
    var args = arguments;
    this.length = (function () {
        for (var i = 0; i < args.length; i++) {
        }
        return i;
    }());
    
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    
    this.toString = function () {
        var newStr = ""
        for (var i = 0; i < this.length; i++) {
            if (i === this.length - 1) {
                newStr += this[i];
            }
            else {
                newStr += this[i] + ",";
            }
        }
        return newStr;
    };
    
    this.push = function (item) {
        this[this.length] = item;
        this.length = this.length + 1;
        return this.length;
    };
    
    this.pop = function () {
        var item = this[this.length - 1];
        delete this[this.length - 1];
        this.length = this.length - 1;
        return item;
    }; 

    this.join = function (separator) {
        var newStr = "";
        for (var i = 0; i < this.length; i++) {
            if (i === this.length - 1) {
                newStr += this[i];
            }
            else {
                newStr += this[i] + separator;
            }
        }
    };
}
