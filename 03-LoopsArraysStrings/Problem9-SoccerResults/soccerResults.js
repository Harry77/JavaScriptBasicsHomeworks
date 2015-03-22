function solve(input) {

    function sorting(teams) {
        var properties = Object.keys(teams).sort();
        var sortedProp = {};
        for (var i = 0; i < properties.length; i++) {
            sortedProp[properties[i]] = teams[properties[i]];
            sortedProp[properties[i]]['matchesPlayedWith'] = sortedProp[properties[i]]['matchesPlayedWith'].sort();
        }
        return sortedProp;
    }

    var teams = {};

    for (var i in input) {
        var elements = input[i].split(/[/:-]/);

        for (var i in elements) {
            elements[i] = elements[i].trim();
        }

        if (elements[0] in teams) {
            teams[elements[0]]['goalsScored'] += Number(elements[2]);
            teams[elements[0]]['goalsConceded'] += Number(elements[3]);
            if (teams[elements[0]]['matchesPlayedWith'].indexOf(elements[1]) === -1) {
                teams[elements[0]]['matchesPlayedWith'].push(elements[1]);
            }
        } else {
            teams[elements[0]] = {goalsScored : Number(elements[2]), goalsConceded : Number(elements[3]), matchesPlayedWith : [elements[1]]};
        }

        if (elements[1] in teams) {
            teams[elements[1]]['goalsScored'] += Number(elements[3]);
            teams[elements[1]]['goalsConceded'] += Number(elements[2]);
            if (teams[elements[1]]['matchesPlayedWith'].indexOf(elements[0]) === -1) {
                teams[elements[1]]['matchesPlayedWith'].push(elements[0]);
            }
        } else {
            teams[elements[1]] = {goalsScored : Number(elements[3]), goalsConceded : Number(elements[2]), matchesPlayedWith : [elements[0]]};
        }
    }

    teams = sorting(teams);

    console.log(JSON.stringify(teams));
}

var input = ['Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'];

solve(input);