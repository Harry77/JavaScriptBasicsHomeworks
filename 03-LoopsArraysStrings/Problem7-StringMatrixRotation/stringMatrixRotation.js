function solve(input) {

    function calcDegrees(degrees) {
        if (degrees % 360 === 0 || degrees === 0) {
            degrees = 0
        } else {
            if (degrees % 270 === 0) {
                degrees = 270;
            } else {
                if (degrees % 180 === 0) {
                    degrees = 180;
                } else {
                    if (degrees % 90 === 0) {
                        degrees = 90;
                    }
                }
            }
        }
        return degrees;
    }

    function findMaxLength (lines) {
        var max = 0;
        for (var index in lines) {
            lines[index].length > max ? max = lines[index].length : max = max;
        }
        return max;
    }

    function rotate0(lines) {
        for (var index in lines) {
            var newStr = '';
            for (var i = 0; i < strLength; i++) {
                if (i < lines[index].length) {
                    newStr += lines[index].charAt(i);
                } else {
                    newStr += ' ';
                }
            }
            console.log(newStr);
        }
    }

    function rotate90(lines) {
        for (var i = 0; i < strLength; i++) {
            var newStr = '';
            for (var j = lines.length - 1; j >= 0; j--) {
                if (i < lines[j].length) {
                    newStr += lines[j].charAt(i);
                } else {
                    newStr += ' ';
                }

            }
            console.log(newStr);
        }
    }

    function rotate180(lines) {
        for (var j = lines.length - 1; j >= 0; j--) {
            var newStr = '';
            for (var i = strLength - 1; i >= 0; i--) {
                if (i < lines[j].length) {
                    newStr += lines[j].charAt(i);
                } else {
                    newStr += ' ';
                }
            }
            console.log(newStr);
        }
    }

    function rotate270(lines) {
        for (var i = strLength - 1; i >= 0; i--) {
            var newStr = '';
            for (var index in lines) {
                if (i < lines[index].length) {
                    newStr += lines[index].charAt(i);
                } else {
                    newStr += ' ';
                }
            }
            console.log(newStr);
        }
    }

    var degrees = Number(input[0].slice(7, -1));
    degrees = degrees % 360;
    input.splice(0, 1);
    var strLength = findMaxLength(input);
    switch (degrees) {
        case 0: rotate0(input); break;
        case 90: rotate90(input); break;
        case 180: rotate180(input); break;
        case 270: rotate270(input); break;
    }
}

var input = ['Rotate(810)', 'js', 'exam'];
solve(input);