var checkamount = document.getElementById("check-amount"),
    tippercentage = document.getElementById("tip-percentage"),
    calculatetip = document.getElementById("calculate-tip"),
    totaltopay = document.getElementById("total-to-pay");
    
     calculatetip.addEventListener("click", function(){
        var checkamountText = parseFloat(checkamount.value),
        tippercentageText = parseFloat(tippercentage.value)/100,
        calculatetipText = checkamountText * tippercentageText,
        totaltopayText = checkamountText + calculatetipText;

        totaltopay.innerHTML = "<strong>Check Amount: </strong> $" + checkamountText+ "<br>" +
                "<strong>Tip Percentage:</strong> " + tippercentageText * 100+ "%<br>" +
                "<strong>Calculate Tip:</strong> $" + calculatetipText + "<br>" +
                "<strong>Total to Pay:</strong> $" + totaltopayText;


     });