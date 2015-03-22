function scoreModification(input) {
    var scores = input.filter(function(element) {
        return element >= 0 && element <= 400;
    })
    scores = scores.map(function(element) {
        return element * 4 / 5;
    })
   console.log(scores.sort(function(x, y) {
        return x > y;
    }))
}

scoreModification([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);