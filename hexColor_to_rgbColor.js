// Using Loop
function getRgb(hexColor) {
    var decimal;
    var rgbColor = "rgb";
    for (var i = 1; i <= 6; i++) {
        if (i % 2 !== 0) {
            decimal = parseInt(hexColor[i] + hexColor[i + 1], 16);
        }
        else {
            if (i === 2) {
                rgbColor += "(" + decimal + ", ";
            }
            else if (i === 6) {
                rgbColor += decimal + ")";
            }
            else {
               rgbColor += decimal + ", ";
            }
        }
    }
    return rgbColor;
}

//Without Loop
function getRgb(hexColor) {
    var rgbColor = "rgb(" + 
                    parseInt(hexColor[1] + hexColor[2], 16) + ", " +
                    parseInt(hexColor[3] + hexColor[4], 16) + ", " +
                    parseInt(hexColor[5] + hexColor[6], 16) + ")";  
    return rgbColor;
}
