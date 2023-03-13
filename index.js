
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var img1 = document.querySelector(".img1") ;
img1.setAttribute("src","images/dice"+randomNumber1+".png");

var img2 = document.querySelector(".img2") ;
img2.setAttribute("src","images/dice"+randomNumber2+".png");

var h1 = document.querySelector("h1");

if (randomNumber1 === randomNumber2 ) {
    h1.textContent = "Draw!"
} else if (randomNumber1 >randomNumber2) {
    h1.textContent = "Player 1 wins!"
} else {
    h1.textContent = "Player 2 wins!"
}

