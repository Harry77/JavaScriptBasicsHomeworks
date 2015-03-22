function solve(input) {
    function Product(prodName, prodPrice, prodVotes) {
        this.name = prodName;
        this.price = prodPrice;
        this.votes = prodVotes;
    }

    function sortByPrice(prodArr) {
        return prodArr.sort(function(a, b) {
            if (Number(a['price']) > Number(b['price'])) {
                return 1;
            } else if (Number(a['price']) < Number(b['price'])) {
                return -1;
            } else {
                if (a['name'] > b['name']) {
                    return 1;
                } else if (a['name'] < b['name']) {
                    return -1;
                }
            }
        })
    }

    function printTable(prodArr) {
        for (var i = 2; i < input.length - 1; i++) {
            input[i] = '<tr><td>' + prodArr[i - 2]['name'] + '</td><td>' + prodArr[i - 2]['price'] + '</td><td>' + prodArr[i - 2]['votes'] + '</td></tr>';
        }

        for (var line in input) {
            console.log(input[line]);
        }
    }

    var prodArr = [];
    for (var i = 2; i < input.length - 1; i ++) {
        var elements = input[i].split('</td><td>');
        var prodName = elements[0].slice(8);
        var prodPrice = elements[1];
        var prodVotes = elements[2].slice(0, -10);
        prodArr.push(new Product(prodName, prodPrice, prodVotes));
    }

    prodArr = sortByPrice(prodArr);
    printTable(prodArr);
}

var input = ['<table>',
    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '</table>'];

solve(input);