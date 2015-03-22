function groupBy(criteria) {
    function Person(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    var people = [
        new Person("Scott", "Guthrie", 38),
        new Person("Scott", "Johns", 36),
        new Person("Scott", "Hanselman", 39),
        new Person("Jesse", "Liberty", 57),
        new Person("Jon", "Skeet", 38)
    ];

    var groups = {};

    for (var index in people) {
        var person = people[index];
        var key = 'Group ' + person[criteria];
        var value = person.firstName + ' ' + person.lastName + '(age ' + person.age + ')';
        if (key in groups) {
            groups[key].push(value);
        } else {
            groups[key] = [value];
        }
    }

    for (var prop in groups) {
        console.log(prop + ' : [' + groups[prop] + ']');
    }
    console.log();
}

groupBy('firstName');
groupBy('age');
groupBy('lastName');

//Group Scott : [Scott Guthrie(age 38), Scott Johns(age 36), Scott Hanselman(age 39)]
//Group Jesse : [Jesse Liberty(age 57)]
//Group Jon : [Jon Skeet(age 38)]