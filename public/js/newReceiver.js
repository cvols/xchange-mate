//JamesK 
    
$(document).on("submit","#addCustomer", insertNewCustomer)

function insertNewCustomer(event) {
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
      
      stree_address: $("#address").val().trim(),

      city: $("#city").val().trim(),

      state: $("#state").val().trim(),

      zipCode: $("#zip_code").val().trim()
      
    };

    var customer = [];

    function getCustomers() {
        $.get("/api/newCustomer", function(data) {
          customer = data;
        });
      }

    $.post("/api/newCustomer", newCustomer, getCustomers);
       console.log("hello")
}
