var year = prompt("Enter a year");
var d4 = year % 4;
var d100 = year % 100;
var d400 = year % 400;

if (d4 == 0) {
    if (d100 == 0 && d400 != 0) {
        alert("Not leap, sorry")
    }
    else{
        alert("A leap year!")
    }
}
else {
    alert("Not leap, sorry")
}