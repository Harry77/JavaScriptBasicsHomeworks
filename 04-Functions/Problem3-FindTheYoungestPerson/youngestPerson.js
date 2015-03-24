function findYoungestPerson(people) {
    var hasPhone = [];

    for (var i in people) {
        if (people[i]['hasSmartphone']) {
            hasPhone.push(people[i]);
        }
    }

    hasPhone = hasPhone.sort(function(a, b) {
        if (a['age'] > b['age']) {
            return a['age'] > b['age'];
        }
    })

    console.log('The youngest person is ' + hasPhone[0]['firstname'] + ' ' + hasPhone[0]['lastname']);
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);