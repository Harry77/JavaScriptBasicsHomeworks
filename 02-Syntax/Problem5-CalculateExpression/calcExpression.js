function calc() {
    var expr = eval(document.getElementById("expression").value);
    document.getElementById("solution").innerHTML = expr;
}