let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "images/" + "dice" + randomNumber1 + ".png";
let randomImageSource = document.querySelectorAll("img")[0];

randomImageSource.setAttribute("src", randomDiceImage);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";

let randomImageSource2 = document.querySelectorAll("img")[1];

randomImageSource2.setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}