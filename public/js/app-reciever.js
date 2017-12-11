$(document).ready(function () {

    $('select').material_select();
});

console.log("inital");



$("#submit").click(function () {

    var desiredCurrency = $("#dCurrency").val().trim();
    var currentCurrency = $("#cCurrency").val().trim();
    var desiredAmount = $("#desiredAmount").val().trim();
    var transLocation = $("#transLocation").val().trim();
    var transDate = $("#transDate").val().trim();
    var queryUrl = "http://api.fixer.io/latest?base=" + desiredCurrency + "&symbols=" + currentCurrency
     
    var pain = JSON.stringify(desiredCurrency);


    console.log("desired currency" + " " + desiredCurrency);
    console.log("current currency" + " " + currentCurrency);
    console.log("desired amount" + " " + desiredAmount);
    console.log("transaction location" + " " + transLocation);
    console.log("transaction Date" + " " + transDate);

    $.ajax({
        url: queryUrl,
        method: 'GET',
        dataType: 'json'
    }).done(function (response) {
        
        console.log("USD" + response.rates.USD);
        var obj = response.rates
        console.log(response.rates);
        for (x in obj) {
    
            var val = obj[x];
            var fee =  "fee" + " " + val * desiredAmount + " " + currentCurrency
            console.log(val);
            console.log(fee);
            console.log( "fee" + " " + val * desiredAmount + " " + currentCurrency);
            
        }
      
        // console.log(response.rates["USD"]);
        //the fee = the amount of your current currency inside of a dolloar of your desired currency * your desired amount of desired currency

        //Problem - how do you get the amount of your current currency inside of dollar of desired currency in a dynamic way. Right now you have to explicitly write the desired currency in dot notation to retrieve the difference.
        // console.log("fee" + " " + response.rates.USD * desiredAmount + " " + currentCurrency);




    });
});




