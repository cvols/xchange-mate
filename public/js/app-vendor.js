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
            for(var i=o; data.Transactions.length; i++) {
                for(var j = 0; j < data.Transactions[i].id.length; j++) {
                    console.log(data.Transactions[i].id[j])
                    if(data.Transactions[i].id[j] == id)
                }
            }

            $('#first_name').html(data.first_name)
            $('#last_name').html(data.last_name)
            $('#phone_number').html(data.phone_number)
            $('#email').html(data.email)
            $('#user_rating').html(data.total_money)
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