var    inputText = document.getElementById("comments"),
        printButton = document.getElementById("print-button"),
        printArea = document.getElementById("print-area"),
        clearButton = document.getElementById("clear-button");

    printButton.addEventListener("click", function(){
        printArea.innerText += "\n" + inputText.value;

    });
    clearButton.addEventListener("click", function(){
        printArea.innerText = "";

    });
