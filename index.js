
document.querySelectorAll('button').forEach(occurence => {
    let id = occurence.getAttribute('id');
        occurence.addEventListener('click', function() {
            
            //if button is clicked then the below code will work
            //first dice
            var randomNumber1 = Math.floor(Math.random() * 6) + 1; // number 1-6

            var randomDiceImage= "dice" + randomNumber1 + ".png";//dice1-6

            var randomImageSource = "images/" + randomDiceImage;//images/dice1.png

            var image1 = document.querySelectorAll("img")[0];
            image1.setAttribute("src",randomImageSource);

            //second dice
            var randomNumber2 = Math.floor(Math.random() * 6) + 1; // number 1-6

            var randomDiceImage2= "dice" + randomNumber2 + ".png";//dice1-6

            var randomImageSource2 = "images/" + randomDiceImage2;//images/dice1.png

            var image2 = document.querySelectorAll("img")[1];
            image2.setAttribute("src",randomImageSource2);


            if(randomNumber1 > randomNumber2){
                document.querySelector("h1").innerHTML="Player 1 Wins!!!";
            }
            else if (randomNumber2 > randomNumber1){
                document.querySelector("h1").innerHTML="Player 2 Wins!!!";
            }
            else{
                document.querySelector("h1").innerHTML="Draw!!!!"
            }
        } );
});

