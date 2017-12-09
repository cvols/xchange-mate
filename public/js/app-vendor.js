$(function () {

    $('.collapsible').collapsible();
    

    $('.test').on('click', function(e) {
        e.preventDefault()

        $('.highlight').hide()
        $('.popout').show()

    })
})