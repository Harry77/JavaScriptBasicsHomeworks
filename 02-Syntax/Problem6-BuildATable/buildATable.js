function buildTable(arr) {

    function fib(num, max) {
        var checkFib = false;
        var curr = 1;
        var prev = 1;
        var newCurr = 1;
        while (newCurr <= max) {
            if (num === newCurr) {
                checkFib = true;
            }
            newCurr = prev + curr;
            prev = curr;
            curr = newCurr;
        }
        if (checkFib) {
            return 'yes';
        } else {
            return 'no';
        }
    }

    var start = Number(arr[0]);
    var end = Number(arr[1]);
    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for (var i = start; i <= end; i++) {
        var mult = i * i;
        console.log('<tr><td>' + i +'</td><td>' + mult + '</td><td>' + fib(i, end) + '</td></tr>');
    }
    console.log('</table>');
}


var arr = [2, 6];
var arr1 = [55, 56];
var input = [arr, arr1];
for (var i = 0; i < input.length; i++) {
    buildTable(input[i]);
}