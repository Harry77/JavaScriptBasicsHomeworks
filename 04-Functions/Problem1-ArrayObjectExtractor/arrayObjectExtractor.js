function extractObjects(input) {
    var newArr = [];
    input.forEach(function(element) {
        if (typeof element === 'object' && !(element instanceof Array)) {
            newArr.push(element);
        }
    })
    console.log(newArr);
}

var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]

extractObjects(input);