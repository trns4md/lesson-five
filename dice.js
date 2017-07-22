var rollbutton = document.getElementById("rollbutton"),
    dicearea = document.getElementById("dice-area");

    
    function getRandomIntInclusive(min, max) {
             min = Math.ceil(min);
             max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;  
    
    rollbutton.addEventListener("click",function(){
        dicearea.innerText +=getRandomInt (1,6) + "\n";
    });