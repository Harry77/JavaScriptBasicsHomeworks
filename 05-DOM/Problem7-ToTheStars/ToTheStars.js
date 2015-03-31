function solve(input) {
    var starSystems = {},
        i,
        starSys,
        moves = input[4],
        coords = input[3].split(' '),
        starX,
        starY,
        position;

    function checkStars(starSystems, coords) {
        for (starSys in starSystems) {
            starX = Number(starSystems[starSys][0]);
            starY = Number(starSystems[starSys][1]);

            if (coords[0] >= starX - 1 &&
                coords[0] <= starX + 1 &&
                coords[1] >= starY - 1 &&
                coords[1] <= starY + 1) {
                    position = starSys.toLowerCase();
            }
        }

        return position;
    }

    for (i = 0; i < 3; i++) {
        starSys = input[i].split(' ');
        starSystems[starSys[0]] = [starSys[1], starSys[2]];
    }

    for (i = 0; i <= moves; i++) {
        position = 'space';
        console.log(checkStars(starSystems, coords));
        coords[1] = Number(coords[1]) + 1;
    }
}

solve(['Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4']);