//JamesK 


$(document).ready(function () {

    $("#addCustomer").click(function () {
        event.preventDefault();
        console.log("hello")
        // make a newCharacter obj
        var newCustomer = {
            // name from name input
            first_name: $("#first_name").val().trim(),
            // role from role input
            last_name: $("#last_name").val().trim(),
            // age from age input
            email: $("#email").val().trim(),
            // points from force-points input
            password: $("#password").val().trim(),

            username: $("#user_name").val().trim(),

            phone_number: $("#phone_number").val().trim(),

            street_address: $("#address").val().trim(),

            city: $("#city").val().trim(),

            state: $("#state").val().trim(),

            zip_code: $("#zip_code").val().trim()

        }


        $.ajax('/api/newCustomer', {
            type: 'POST',
            data: newCustomer
        }).then(function () {
            console.log('added new Customer', newCustomer)
            location.reload()
        })


    });
})
// $("#addVendor").click(function(){
//     event.preventDefault();
//     console.log("hello")
//       // make a newCharacter obj
//       var newCustomer = {
//         // name from name input
//         first_name: $("#first_name").val().trim(),
//         // role from role input
//         last_name: $("#last_name").val().trim(),
//         // age from age input
//         email: $("#email").val().trim(),
//         // points from force-points input
//         password: $("#password").val().trim(),

//         username: $("#user_name").val().trim(),

//         phone_number: $("#phone_number").val().trim(),

//         stree_address: $("#address").val().trim(),

//         city: $("#city").val().trim(),

//         state: $("#state").val().trim(),

//         zipCode: $("#zip_code").val().trim()

//       }  


//       $.ajax('/api/newVendor', {
//           type: 'POST',
//           data: newVendor
//       }).then(function () {
//           console.log('added new Customer', newVendor)
//           location.reload()
//       })
//     })   
// })