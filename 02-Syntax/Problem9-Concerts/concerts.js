function concerts(input) {
    function sortProp(obj) {
        var properties = Object.keys(obj).sort();
        var sortedProp = {};
        for (var i = 0; i < properties.length; i++) {
                sortedProp[properties[i]] = obj[properties[i]];
        }
        return sortedProp;
    }

    var towns = {};
    for (var i = 0; i < input.length; i++) {
        var stringParts = input[i].split(' | ');
        var band = stringParts[0];
        var town = stringParts[1];
        var venue = stringParts[3];
        if (town in towns) {
            if (venue in towns[town]) {
                var bands = towns[town][venue];
                if (bands.indexOf(band) === -1) {
                    bands.push(band);
                    bands.sort();
                    towns[town][venue] = bands;
                }
            } else {
                var bands = [band];
                towns[town][venue] = bands;
                towns[town] = sortProp(towns[town]);
            }
        } else {
            var bands = [band];
            var venues = {};
            venues[venue] = bands;
            towns[town] = venues;
            towns = sortProp(towns);
        }
    }

    console.log(JSON.stringify(towns));
}

var input = ['ZZ Top | London | 2-Aug-2014 | Wembley Stadium', 'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium', 'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium'];
concerts(input);