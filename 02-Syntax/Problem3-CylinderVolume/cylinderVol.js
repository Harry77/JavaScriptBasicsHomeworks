function calcCylinderVol(arr) {
    var vol = Math.PI * arr[0] * arr[0] * arr[1];
    return vol.toFixed(3);
}

var radius = prompt("Enter radius");
var height = prompt("Enter height");
var arr = [radius, height];
console.log(calcCylinderVol(arr));