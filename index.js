var randomNumber1 = Math.floor(Math.random()*6+1);



var replace1 = "images/dice"+randomNumber1+".png";

                document.querySelectorAll("img")[0].setAttribute("src", replace1);

var randomNumber2 = Math.floor(Math.random()*6+1);



var replace2 = "images/dice"+randomNumber2+".png";
                

                document.querySelectorAll("img")[1].setAttribute("src", replace2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'APC wins';
} else if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').innerHTML = 'This is a draw';
}   else {
    document.querySelector('h1').innerHTML = 'PDP wins';
}
