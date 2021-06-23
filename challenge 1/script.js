

// challenge 1 

var a = ["Vienna","<br>"];
var b = [" ","is","<br>"];
var c = [" ", " ", "a","<br>"];
var d = [" ", " ", " ","nice","<br>"];
var e = [" ", " ", " ","  ", "city", "<br>"];

var f = [a, b, c, d, e];

document.write(f.toString().split(",").join("<span style='color:white';> ---- </span>"));



