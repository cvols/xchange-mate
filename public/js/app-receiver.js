$(document).ready(function () {

    $('select').material_select();

    var currency = ['USD', 'EUR']

    var airports = ['Hartsfield-Jackson Atlanta International Airport', 'O\'Hare International']

    $("#myButton").click(function () {
        // add new value
        for (var i = 0; i < airports.length; i++) {
            $('#transaction-location').append(
                $("<option></option>")
                    .attr("value", airports[i])
                    .text(airports[i])
            );
        }

        for (var i = 0; i < currency.length; i++) {
            $('#current-currency').append(
                $("<option></option>")
                    .attr("value", currency[i])
                    .text(currency[i])
            );
        }

        for (var i = 0; i < currency.length; i++) {
            $('#desired-currency').append(
                $("<option></option>")
                    .attr("value", currency[i])
                    .text(currency[i])
            );
        }

        // trigger event
        $('#transaction-location').trigger('contentChanged');
        // trigger event
        $('#current-currency').trigger('contentChanged');
        // trigger event
        $('#desired-currency').trigger('contentChanged');
    });

    // triggered event
    $('select').on('contentChanged', function () {
        // re-initialize (update)
        $(this).material_select();
    });

    $("#submit-btn").click(function () {
        var desiredCurrency = $("#desired-currency").val().trim()
        var currectCurrency = $("#current-currency").val().trim()
        var money = parseInt($("#desired-amount").val().trim())

        var queryUrl = "http://api.fixer.io/latest?base=" + desiredCurrency + "&symbols=" + currectCurrency

        $.ajax({
            url: queryUrl,
            method: 'GET',
            dataType: 'json'
        }).done(function (response) {

            var obj = response.rates
            console.log(response.rates);
            for (x in obj) {

                var exchangeRate = obj[x];
                console.log(exchangeRate)
                var payout = exchangeRate * money
                console.log("exchange rate = " + exchangeRate);
                console.log("total charge " + payout);
            }

            var newTransaction = {
                desired_currency: $("#desired-currency").val().trim(),
                total_money: money,
                current_currency: $("#current-currency").val().trim(),
                transaction_location: $("#transaction-location").val().trim(),
                exchange_rate: exchangeRate,
                fees: 10,
                total_charges: money + 10,
                transaction_date: $("#transaction-date").val().trim()            
            }

            $.ajax('/reciever', {
                type: 'POST',
                data: newTransaction
            }).then(function () {
                console.log('added new transaction', newTransaction)
            })
        })
    })
});