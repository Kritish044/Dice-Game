var RandomNumber1 = Math.floor(Math.random()*6 + 1);
var RandomSource1 = "/images/dice" + RandomNumber1 + ".png";
var select = document.querySelectorAll("img");
select[0].setAttribute("src", RandomSource1);

var RandomNumber2 = Math.floor(Math.random()*6 + 1);
var RandomSource2 = "/images/dice" + RandomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", RandomSource2);

if(RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(RandomNumber2 > RandomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw !!";
}