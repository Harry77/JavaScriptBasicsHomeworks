function solve(input) {

    function sortObj(langs) {
        var properties = Object.keys(langs).sort();
        var sortedLangs = {};

        for (var i = 0; i < properties.length; i++) {
            sortedLangs[properties[i]] = langs[properties[i]];
            sortedLangs[properties[i]]['students'] = sortedLangs[properties[i]]['students'].sort();
        }

        return sortedLangs;
    }

    function estimateAvg(langs) {
        for (var key in langs) {
            var gradeSum = langs[key]['avgGrade'].reduce(function(a, b) {
                return a + b;
            });
            var visitsSum = langs[key]['avgVisits'].reduce(function(a, b) {
                return a + b;
            });
            langs[key]['avgGrade'] = parseFloat((gradeSum / langs[key]['avgGrade'].length).toFixed(2));
            langs[key]['avgVisits'] = parseFloat((visitsSum / langs[key]['avgVisits'].length).toFixed(2));
        }
        return langs;
    }

    var langs = {};

    for (var i in input) {
        var line = input[i].split(/\s*\|\s*/g);
        var name = line[0].trim();
        var lang = line[1];
        var grade = Number(line[2]);
        var visits = Number(line[3].trim());

        if (lang in langs) {
            langs[lang]['avgGrade'].push(grade);
            langs[lang]['avgVisits'].push(visits);
            if (langs[lang]['students'].indexOf(name) === -1) {
                langs[lang]['students'].push(name);
            }
        } else {
            langs[lang] = {avgGrade : [grade], avgVisits : [visits], students : [name]};
        }
    }

    langs = sortObj(langs);
    langs = estimateAvg(langs);
    console.log(JSON.stringify(langs));
}

var input = ['Peter Nikolov | PHP  | 5.50 | 8',
            'Maria Ivanova | Java | 5.83 | 7',
            'Ivan Petrov   | PHP  | 3.00 | 2',
            'Ivan Petrov   | C#   | 3.00 | 2',
            'Peter Nikolov | C#   | 5.50 | 8',
            'Maria Ivanova | C#   | 5.83 | 7',
            'Ivan Petrov   | C#   | 4.12 | 5',
            'Ivan Petrov   | PHP  | 3.10 | 2',
            'Peter Nikolov | Java | 6.00 | 9'];

solve(input);