function solve(input) {
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + Number(input[0]).toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
    var trend;
    for (var i = 1; i < input.length; i++) {
        var curr = Number(Number(input[i]).toFixed(2));
        var prev = Number(Number(input[i-1]).toFixed(2));
        curr > prev ? trend = 'up' :
            curr < prev ? trend = 'down' :
                trend = 'fixed';
        console.log('<tr><td>' + curr.toFixed(2) + '</td><td><img src="' + trend + '.png"/></td></td>');
    }
    console.log('</table>');
}

var input = ['50', '60'];
solve(input);
var input = ['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225'];
solve(input);