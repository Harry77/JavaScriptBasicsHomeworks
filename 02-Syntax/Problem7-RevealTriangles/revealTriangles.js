function revealTriangles(input) {
    var topCoords = new Array();
    for (var row = 0; row < input.length - 1; row ++) {
        for (var col = 1; col < input[row].length; col++) {
            if ((input[row + 1].charAt(col - 1) === input[row].charAt(col)) &&
                (input[row + 1].charAt(col) === input[row].charAt(col)) &&
                (input[row + 1].charAt(col + 1) === input[row].charAt(col))) {
                topCoords.push(row);
                topCoords.push(col);
            }
        }
    }

    for (var i = 0; i < topCoords.length; i+=2) {
        var row = topCoords[i];
        var col = topCoords[i+1];
        input[row] = input[row].substr(0, col) + '*' + input[row].substr(col + 1);
        input[row + 1] = input[row + 1].substr(0, col - 1) + '***' + input[row + 1].substr(col + 2);
    }

    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}

var arr = new Array();
arr.push('aa');
arr.push('aaa');
arr.push('aaaa');
arr.push('aaaaa');
revealTriangles(arr);