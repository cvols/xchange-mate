console.log("inital");

var queryUrl = "https://api.fixer.io/latest"


$("#apiCall").click(function () {
    $.ajax({
        url: queryUrl,
        method: 'GET',
        dataType: 'json'
    }).done(function (response) {
        // console.log(queryUrl);
        console.log(response.rates);
        console.log(response.rates.USD);
        // console.log(response.base);
        // console.log(response.rates.GBP);
    });
});