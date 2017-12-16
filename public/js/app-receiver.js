$(document).ready(function () {

    $('select').material_select();

    var currency = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR' ]

    var airports = ['Hartsfield-Jackson Atlanta International Airport', 'O\'Hare International', 'Los Angeles International Airport', 'Dallas/Fort Worth International Airport', 'John F. Kennedy International Airport', 'Denver International Airport', 'San Francisco International Airport', 'McCarran International Airport', 'Phoenix Sky Harbor International Airport', 'George Bush Intercontinental Airport', 'Charlotte/Douglas International Airport', 'Miami International Airport', 'Orlando International Airport', 'Newark Liberty International Airport', 'Seattle-Tacoma International Airport', 'Minneapolis-St. Paul International Airport', 'Detroit Metropolitan Wayne County Airport', 'Philadelphia International Airport', 'Logan International Airport', 'LaGuardia Airport', 'Fort Lauderdale/Hollywood International Airport', 'Baltimore-Washington International Thurgood Marshall Airport', 'Washington Dulles International Airport', 'Salt Lake City International Airport', 'Midway International Airport']

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