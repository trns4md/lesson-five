var userName = document.getElementById("username"),
    makeSentence = document.getElementById("make-sentence"),
    clearButton = document.getElementById("clear-button"),
    displayArea = document.getElementById("display-area"),
    phrases1 = ["Did I ever tell you about the time", 
    "Fezzes are cool", 
    "Wibbly Wobbley",
     "You will be upgraded"],
    phrases2 = [" there is something screwy going on here ",
    " I hate rabbits "," smarter then the average bear "," I am a stinker "],
    phrases3 = [" my brain hurts", 
    " I wish to register a complaint",
    " bring out your dead"," I want to buy some cheese"],
    phrases4 = [" makes me smile "," to be silly ", 
    " like no way man", " Minecraft Steve"];

    var getRandomWord = function getRandomWord(wordList){
        var index = Math.floor(Math.random() * wordList.length);
        return wordList [index];
    }

    makeSentence.addEventListener ("click",function(){
        var results = ""+ getRandomWord(phrases1);
            results += "" + getRandomWord(phrases2);
            results += "" +  userName.value;
            results += "" + getRandomWord(phrases3);
            results += "" + getRandomWord(phrases4) + "\n\n";

            displayArea.innerText += results;
    });


        clearButton.addEventListener ("click",function(){
            displayArea.innerText ="";
    });

