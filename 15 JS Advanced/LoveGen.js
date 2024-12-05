function loveGen() {
    var prob = Math.random();
    return Math.round(prob*100);
}

// users are asked for names and get random number
// it would have been cooler if it combined their name char's ASCII codes with for loop to generate a seed for random
// but it seems that random cannot take seeds in it
// and i am too lazy to find out how hashes work :p

var prob = loveGen();
console.log(prob);