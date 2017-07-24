var checkamount = document.getElementById("check-amount"),
    tippercentage = document.getElementById("tip-percentage"),
    calculatetip = document.getElementById("calculate-tip"),
    totaltopay = document.getElementById("total-to-pay");
    
     calculatetip.addEventListener("click", function(){
        checkamount = parseFloat(checkamount.value),
        tippercentage = parseFloat(tippercentage.value)/100,
        calculatetip = checkamount * tippercentage,
        totaltopay = checkamount + calculatetip;

        totaltopay.innerHTML = "<strong>Check Amount: </strong> $" + checkamount + "<br>" +
                "<strong>Tip Percentage:</strong> $" + tippercentage * 100+ "%<br>" +
                "<strong>Calculate Tip:</strong> $" + calculatetip + "<br>" +
                "<strong>Total to Pay:</strong> $" + totaltopay;


     });