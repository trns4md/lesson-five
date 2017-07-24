var whotogreet = document.getElementById("who-to-greet"),
    greetingarea = document.getElementById("greeting-area"),
    greetingsButton = document.getElementById("greetings-button"),
    helloButton= document.getElementById("hello-button"),
    howdyButton= document.getElementById("howdy-button"),
    backatyaButton = document.getElementById("back-at-ya-button");

var clearName = function(){
   document.getElementById("greeing-area").value = "";
}    
    greetingsButton.addEventListener("click",function(){
        greetingarea.innerText ="\n" + greetingsButton.value + whotogreet.value + "!";
        clearName;
    });

    helloButton.addEventListener("click", function(){
        greetingarea.innerText ="\n" + helloButton.value + whotogreet.value + "!";
        clearName();
    });

    howdyButton.addEventListener("click",function(){
        greetingarea.innerText ="\n" + howdyButton.value +whotogreet.value + "!";
       clearName(); 
    });

    backatyaButton.addEventListener("click",function(){
        greetingarea.innerText = "\n" + backatyaButton.value + whotogreet.value + "!";
        clearName();
    });