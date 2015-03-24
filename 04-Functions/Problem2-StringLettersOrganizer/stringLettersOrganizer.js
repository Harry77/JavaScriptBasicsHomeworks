function sortLetters(input, asc) {
    input = input.split('').sort(function (a, b) {
            return a.toLowerCase() > b.toLowerCase()? 1 : (a.toLowerCase() < b.toLowerCase() ? -1 : 0);
    })
    asc ? console.log(input.join('')) : console.log(input.reverse().join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false)