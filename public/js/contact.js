(function(){
    console.log('HELLO!')
    $('#btn-contact-submit').click(function(event){
        if (event)
            event.preventDefault()

        var visitor = {
            name: $('#cont-form-name').val(),
            email: $('#cont-form-email').val(),
            message: $('#cont-form-message').val()
        }
        
        console.log('CONTACT FORM SUBMITTED')
        $.ajax({
            url: '/api/subscriber',
            type: 'POST',
            data: visitor,
            success: function(response){
                
            },
            error: function(response){
                
            }
        })
    })

})()