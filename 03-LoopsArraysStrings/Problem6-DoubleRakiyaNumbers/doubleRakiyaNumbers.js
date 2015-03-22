function solve (input) {

    var start = input[0];
    var end = input[1];
    console.log('<ul>');

    for (var i = start; i <= end; i++) {
        var numStr = i.toString();
        var checkDouble = false;

        found:
        for (var j = 0; j < numStr.length - 3; j++) {
            for (var k = j + 2; k < numStr.length - 1; k++) {
                if (numStr.substr(j, 2) === numStr.substr(k, 2)) {
                    checkDouble = true;
                    break found;
                }
            }
        }

        checkDouble ?
            console.log('<li><span class=\'rakiya\'>' + numStr + '</span><a href="view.php?id=' + numStr + '>View</a></li>') :
            console.log('<li><span class=\'num\'>' + numStr + '</span></li>');
    }

    console.log('</ul>');
}

solve([5, 8]);
solve([11210, 11215]);
solve([55555, 55560]);