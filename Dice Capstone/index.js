var randNum1 = (6 * Math.random()) + 1;
var randDice1 = Math.floor(randNum1);
var randImg1 = "./images/dice" + randDice1 + ".png";
var img2Change1 = document.getElementById('img1');
img2Change1.setAttribute("src", randImg1);

var randNum2 = (6 * Math.random()) + 1;
var randDice2 = Math.floor(randNum2);
var randImg2 = "./images/dice" + randDice2 + ".png";
var img2Change2 = document.getElementById('img2');
img2Change2.setAttribute("src", randImg2);

if (randDice1 > randDice2) {
    document.querySelector("h1").innerHTML = "Player 1 win!"
} else if (randDice1 < randDice2) {
    document.querySelector("h1").innerHTML = "Player 2 win!"
} else {
    document.querySelector("h1").innerHTML = "Its a draw!"
}