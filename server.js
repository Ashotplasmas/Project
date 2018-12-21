side = 10;
grassArr = [];
arr = [];
matrix = [];
xotakerArr = [];
gishatichArr = [];
JorArr = [];
PatArr = [];

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
 

app.use(express.static("."));
app.get('/',function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket){ })

var Grass = require("./Grass")
var Xotaker = require("./Xotaker")
var Gishatich = require("./Gishatich")
var Jorik_Vardanov = require("./Jorik_Vardanov")
var Parisp = require("./Parisp")

// var VampirArr = [];
function RadInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}
var matrix = [];
var n = 50
var m = 50
for (var i = 0; i <= n; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= n; y++) {
    for (var x = 0; x <= m; x++) {
        matrix[y][x] = Math.round(Math.random());
    }
}

var tokos1 = 0.4;
var tokos2 = 0.6;
var tokos3 = 0.7;
var tokos4 = 0.7;
var tokos5 = 8;

var qanak1 = n * m * tokos1 / 100;
var qanak2 = n * m * tokos2 / 100;
var qanak3 = n * m * tokos3 / 100;
var qanak4 = n * m * tokos4 / 100;
var qanak5 = n * m * tokos5 / 100;

for (var z = 0; z < qanak1; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 2;
}

for (var z = 0; z < qanak2; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 3;
}

for (var z = 0; z < qanak3; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 4;
}
for (var z = 0; z < qanak5; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 5;
}

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gi = new Gishatich(x, y)
                gishatichArr.push(gi)
            }
            else if (matrix[y][x] == 4) {
                var Jr = new Jorik_Vardanov(x, y)
                JorArr.push(Jr)
            }
            else if (matrix[y][x] == 5) {
                var pt = new Parisp(x, y)
                PatArr.push(pt)
            }


        }
    

    frameRate(50);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function drawUrish() {

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].mult()
        gishatichArr[i].move()
        gishatichArr[i].move1()
        gishatichArr[i].eat()
        gishatichArr[i].die()

    }
    for (var i in JorArr) {
        JorArr[i].move()
        JorArr[i].move1()
        JorArr[i].eat()
        JorArr[i].eat1()

    }
    for (var i in PatArr) {


    }

}

setInterval(drawUrish, 200)