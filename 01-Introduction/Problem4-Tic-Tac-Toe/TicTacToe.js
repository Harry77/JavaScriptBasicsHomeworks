var player = "X";
var table = new Array(3);

for (var i = 0; i < 3; i++) {
    table[i] = new Array(3);
}

function chngStyle(x1,y1,x2,y2,x3,y3) {
    document.getElementById(x1+"-"+y1).style.color = "green";
    document.getElementById(x2+"-"+y2).style.color = "green";
    document.getElementById(x3+"-"+y3).style.color = "green";
}

function checkWin() {
    var win = false;

    for (var i = 0; i < 3; i++) {
        if (table[i][0] == table[i][1] && table[i][1] == table[i][2] && table[i][0] != null) {
            win = true;
            chngStyle(i+1,1,i+1,2,i+1,3);
        }

        if (table[0][i] == table[1][i] && table[1][i] == table[2][i] && table[0][i] != null) {
            win = true;
            chngStyle(1,i+1,2,i+1,3,i+1);
        }
    }

    if (table[0][0] == table[1][1] && table[1][1] == table[2][2] && table[0][0] != null) {
        win = true;
        chngStyle(1,1,2,2,3,3);
    }

    if (table[0][2] == table[1][1] && table[1][1] == table[2][0] && table[0][2] != null) {
        win = true;
        chngStyle(1,3,2,2,3,1);
    }

    return win;
}

function choose(row, col) {
    document.getElementById(row + "-" + col).innerHTML = player;
    table[row-1][col-1] = player;
    var check = checkWin();
    if (!check) {
        if (player=="X") {
            player = "O";
        } else {
            player = "X";
        }
        document.getElementById("player").innerHTML = player;
    } else {
    document.getElementById("winner").innerHTML = "GAME OVER! Winner is " + player;
    }
}