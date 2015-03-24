function solve(input) {
    function Tetris (I, L, J, O, Z, S, T) {
        this.I = I;
        this.L = L;
        this.J = J;
        this.O = O;
        this.Z = Z;
        this.S = S;
        this.T = T;
    }

    function checkI(input, row, col) {
        return input[row].charAt(col) === input[row + 1].charAt(col) &&
            input[row + 1].charAt(col) === input[row + 2].charAt(col) &&
            input[row + 2].charAt(col) === input[row + 3].charAt(col) &&
            input[row + 3].charAt(col) === 'o' ? 1 : 0;
    }

    function checkL(input, row, col) {
        return input[row].charAt(col) === input[row + 1].charAt(col) &&
            input[row + 1].charAt(col) === input[row + 2].charAt(col) &&
            input[row + 2].charAt(col) === input[row + 2].charAt(col + 1) &&
            input[row + 2].charAt(col + 1) === 'o' ? 1 : 0;
    }

    function checkJ(input, row, col) {
        return input[row].charAt(col) === input[row + 1].charAt(col) &&
            input[row + 1].charAt(col) === input[row + 2].charAt(col) &&
            input[row + 2].charAt(col) === input[row + 2].charAt(col - 1) &&
            input[row + 2].charAt(col - 1) === 'o' ? 1 : 0;
    }

    function checkO(input, row, col) {
        return input[row].charAt(col) === input[row].charAt(col + 1) &&
            input[row].charAt(col + 1) === input[row + 1].charAt(col) &&
            input[row + 1].charAt(col) === input[row + 1].charAt(col + 1) &&
            input[row + 1].charAt(col + 1) === 'o' ? 1 : 0;
    }

    function checkZ(input, row, col) {
        return (input[row].charAt(col) === input[row].charAt(col + 1) &&
            input[row].charAt(col + 1) === input[row + 1].charAt(col + 1) &&
            input[row + 1].charAt(col + 1) === input[row + 1].charAt(col + 2) &&
            input[row + 1].charAt(col + 2) === 'o') ? 1 : 0;
    }

    function checkS(input, row, col) {
        return input[row].charAt(col) === input[row].charAt(col + 1) &&
            input[row].charAt(col + 1) === input[row + 1].charAt(col) &&
            input[row + 1].charAt(col) === input[row + 1].charAt(col - 1) &&
            input[row + 1].charAt(col - 1) === 'o' ? 1 : 0;
    }

    function checkT(input, row, col) {
        return input[row].charAt(col) === input[row].charAt(col + 1) &&
        input[row].charAt(col + 1) === input[row].charAt(col + 2) &&
        input[row].charAt(col + 2) === input[row + 1].charAt(col + 1) &&
        input[row + 1].charAt(col + 1) === 'o' ? 1 : 0;
    }

    var tetris = new Tetris(0,0,0,0,0,0,0);

    for (var row = 0; row < input.length - 1; row++) {
        for (var col = 0; col < input[row].length; col++) {
            if (row < input.length - 3) {
                tetris.I = tetris.I + checkI(input, row, col);
            }
            if (row < input.length - 2) {
                if (col > 0) {
                    tetris.J = tetris.J + checkJ(input, row, col);
                }
                if (col < input[row].length - 1) {
                    tetris.L = tetris.L + checkL(input, row, col);
                }
            }
            if (row < input.length - 1) {
                if (col < input[row].length - 1) {
                    tetris.O = tetris.O + checkO(input, row, col);
                }
                if (col < input[row].length - 2) {
                    tetris.Z = tetris.Z + checkZ(input, row, col);
                    tetris.T = tetris.T + checkT(input, row, col);
                }
                if (col < input[row].length - 1 && col > 0) {
                    tetris.S = tetris.S + checkS(input, row, col);
                }
            }
        }
    }

    console.log(JSON.stringify(tetris));
}

var input = ['--o--o-', '--oo-oo', 'ooo-oo-', '-ooooo-', '---oo--'];
var input1 = ['-oo', 'ooo', 'ooo'];
solve(input);
solve(input1);