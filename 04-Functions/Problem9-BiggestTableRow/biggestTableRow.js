function solve(input) {
    var townsArr = [];
    for (var i = 2; i < input.length - 1; i++) {
        var lines = input[i].split('</td><td>');
        lines[3] = lines[3].slice(0, -10);
        var incomes = [];
        for (var j = 1; j < lines.length; j++) {
            if (lines[j] !== '-') {
                incomes.push(lines[j]);
            }
        }
        var infoFound = false;
        var sum = 'no data';
        for (var j = 0; j < incomes.length; j++) {
            if (incomes[j] !== '-') {
                infoFound ? sum += Number(incomes[j]) : sum = 0 + Number(incomes[j]);
                infoFound = true;
            }
        }
        incomes.splice(0, 0, sum);
        townsArr.push(incomes);
    }
    var biggestIndex;
    var biggestIncome = -1;

    for (var i = 0; i < townsArr.length; i++) {
        if (townsArr[i][0] !== 'no data' && townsArr[i][0] > biggestIncome) {
            biggestIncome = townsArr[i][0];
            biggestIndex = i;
        }
    }

    if (!infoFound) {
        console.log('no data');
    } else {
        var output = biggestIncome + ' = ' + townsArr[biggestIndex][1];
        for (var i = 2; i < townsArr[biggestIndex].length; i++) {
            output = output + ' + ' + townsArr[biggestIndex][i];
        }
        console.log(output);
    }
}

var input = ['<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
    '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
    '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
    '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
    '</table>'];
solve(input);
var input = ['<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
    '</table>'];
solve(input);
var input = ['<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
    '<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
    '<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
    '</table>'];
solve(input);