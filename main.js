feather.replace();

$('#SubmitButton').click(function(){
   const firstName = $('#FirstName').val();
    const lastName = $('#LastName').val();
    const email = $('#E-Mail').val();
    $('.confirmation').text("Congratulation! You are on our mailing list.  A confirmation e-mail has been sent to " + firstName + " " + lastName + " at " + email +"!!!");
});
