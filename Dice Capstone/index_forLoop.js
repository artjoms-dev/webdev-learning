function randomImage(i) {
    var randNum = (6 * Math.random()) + 1;
    var randDice = Math.floor(randNum);
    var randImg = './images/dice${randNum}.png';
    var img2Change = document.getElementById('img${i}');
    img2Change.src = randImg;
}

if (localStorage.getItem('visited')) {
    for (let i = 1; i < 2; i++) {
        randomImage(i);
    }
}

