result = "";
for (var i = 0; i <= 10; i++) {
    result += i;
    for (var j = 1; j <= 10; j++) {
        if (i === 0) {
            result += "\t" + j;
        }
        else {
            result += "\t" + (j * i);
        }
    }
   result += "\n\n";
}

