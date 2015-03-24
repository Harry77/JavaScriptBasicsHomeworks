function clone(a) {
    return JSON.parse(JSON.stringify(a));
}

function compareObjects (a, b) {
    a == b ? console.log('a == b --> true') : console.log('a == b --> false\n');
}

var a = {name: 'Pesho', age: 21}
var b = clone(a); // a deep copy
compareObjects(a, b);

var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
compareObjects(a, b);