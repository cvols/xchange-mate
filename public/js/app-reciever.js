$(document).ready(function() {

    $('select').material_select();
  });

console.log("inital");



$("#submit").click(function () {

     var desiredCurrency =    $("#dCurrency").val().trim();
     var currentCurrency =    $("#cCurrency").val().trim();
     var desiredAmount =      $("#desiredAmount").val().trim();
     var transLocation =      $("#transLocation").val().trim();
     var transDate =          $("#transDate").val().trim();
     var queryUrl = "https://api.fixer.io/latest?base=" + desiredCurrency
     var queryUrl2 = "https://api.fixer.io/latest?symbols=" +  currentCurrency

        console.log("desired currency" + " " + desiredCurrency);
        console.log("current currency" + " " + currentCurrency);
        console.log("desired amount" + " " + desiredAmount);
        console.log("transaction location" + " " + transLocation);
        console.log("transaction Date" + " " + transDate);

    $.ajax({
        url: queryUrl, queryUrl2,
        method: 'GET',
        dataType: 'json'
    }).done(function (response) {
       
        console.log(response.base = desiredCurrency);
        console.log("fee" + " " + response.rates.USD * desiredAmount + " " + currentCurrency);
        // console.log(response.base);
        // console.log(response.rates.GBP);
        
    });
});




