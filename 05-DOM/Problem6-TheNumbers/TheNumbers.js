function solve(input) {
    var regex = /[\d]+/g,
        matches = input[0].match(regex),
        output;

    function addZeroes(num) {
        while (num.length < 4) {
            num = '0' + num;
        }

        return num = '0x' + num;
    }

    matches = matches.map(function(num) {
        num = Number(num).toString(16).toUpperCase();
        return num = addZeroes(num);
    })

    output = matches.join('-');
    console.log(output);
}

solve(['20']);