function courseGradeScaling(input) {
    var result = input.map(function(element) {
        element['score'] = (element['score'] * 1.1).toFixed(1);
        element['score'] > 100 ? element['hasPassed'] = true : element['hasPassed'] = false;
        return element;
    });
    result = result.filter(function(element) {
        return element['score'] > 100;
    });
    result = result.sort(function(element, element1) {
            return (element['name'] > element1['name']) ? 1 : (element['name'] < element1['name']) ? -1 : 0;
    });

    console.log(JSON.stringify(result));
}

courseGradeScaling([
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]);