function solve(input) {
    var bill = Number(input[0]),
        mood = input[1],
        tip,
        degree;

    switch (mood) {
        case 'happy':
            tip = bill * 0.1;
            break;
        case 'married':
            tip = bill * 0.0005;
            break;
        case 'drunk':
            tip = bill * 0.15;
            degree = Number(tip.toString().charAt(0));
            tip = Math.pow(tip, degree);
            break;
        default :
            tip = bill * 0.05;
    }

    console.log(tip.toFixed(2));
}

solve(['716.00',
    'bored']);