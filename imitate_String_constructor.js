function MyString(str) {
    for (var i = 0; str[i] !== undefined; i++) {
        this[i] = str[i];
        this.length = i + 1;
    }
 
    this.toString = function () {
        return str;
    }

    this.valueOf = function () {
        return str;
    }

    this.charAt = function (index) {
        if (isNaN(parseInt(index))) {
            return str[0];
        }
        else if (parseInt(index) < 0) {
            return "";
        }
        else {
            return str[parseInt(index)];
        }
    } 

    this.concat = function (anotherStr) {
        str = str + anotherStr;
            return str;
    }
    
    this.slice = function (startIndex, endIndex) {
        var newStr = "";
        if (endIndex < 0) {
            for (var i = startIndex; i < this.length - (-endIndex); i++) {
                newStr += str[i];
            }
        }
        else {
            for (var i = startIndex; i < endIndex; i++) {
                newStr += str[i];
            }
        }
        return newStr;
    }

    this.split = function (separator) {
        var element = "";
        var newArr = [];
        var index = 0;
        for (var i = 0; i < this.length; i++) {
            if (str[i] !== separator ) {
                element += str[i];
            }
            if (str[i] === separator || i === this.length - 1)  {
                newArr[index] = element;
                element = "";
                index += 1;
            }
        }
        return newArr;
    }

    this.reverse = function () {
        var newStr = "";
        for (var i = this.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
}
