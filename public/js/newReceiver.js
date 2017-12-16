//JamesK 


$(document).ready(function () {


    $("#addCustomer").click(function () {
        event.preventDefault();

        var newCustomer = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            username: $("#user_name").val().trim(),
            phone_number: $("#phone_number").val().trim(),
            street_address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip_code: $("#zip_code").val().trim()
        }

        $.ajax('/newCustomer', {
            type: 'POST',
            data: newCustomer
        }).then(function () {
            console.log('added new Customer', newCustomer)
            location.reload()
        })
    });

    $('#sign-in').on('click', function(event) {
        event.preventDefault()

        $.ajax('/custLogin-btn/:password', {
            type: 'GET'
        }).then(function(data) {

        })
    })
});