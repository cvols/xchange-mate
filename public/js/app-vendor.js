$(function () {

    $('.collapsible').collapsible();

    $('.select-reciever').on('click', function (e) {
        e.preventDefault()

        $('.highlight').hide()
        $('.popout').show()

        var id = $(this).data('id')

        $.ajax('/api/vendor/' + id, {
            type: 'GET'
        }).then(function (data) {
            console.log(data.Transactions[0].id)

            var s = data.phone_number
            var phoneNumber
            
            function formatPhoneNumber(s) {
                var s2 = ("" + s).replace(/\D/g, '');
                var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
                phoneNumber = ((!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3])
            }

            formatPhoneNumber(s)

            var x = []

            for (var i = 0; i < data.Transactions.length; i++) {
                
                x.push(data.Transactions[i].id)
                if (data.Transactions[i].id == data.Transactions.id) {
                    //console.log(data.id)
                } else {
                    //console.log('not a match')
                }
            }
            console.log(x)

            $('#name').html(data.first_name + ' ' + data.last_name)
            $('#phone_number').html(phoneNumber)
            $('#email').html(data.email)
            $('#location').html(data.Transactions[0].transaction_location)
            $('#user_rating').html(data.user_rating)
            $('#total_money').html('$' + data.Transactions[0].total_money)
        })
    })

    $('#click-div').on('click', function (e) {
        e.preventDefault()

        var id = $(this).data('id')
        var nowDevoured = $(this).data('nowdevoured')

        var transaction = {
            transaction: true
        }

        $.ajax('/api/vendor/' + id, {
            type: 'PUT',
            data: transaction
        }).then(function () {
            console.log('changed transaction to', transaction)
        })
    })

    $('#vendor-back-btn').on('click', function (e) {
        e.preventDefault()

        $.ajax('/vendor/back', {
            type: 'GET'
        }).then(function () {
            location.reload()
        })
    })
})