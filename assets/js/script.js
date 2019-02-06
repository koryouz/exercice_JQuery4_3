$(function(){
  $('#submit').click(function(){
    var regexName = /^[a-zA-Z -]+$/;
    var regexphone = /^[0-9 -]{10,14}$/;
    var regexMail = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,}$/;
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var mail = $('#mail').val();
    var phoneNumber = $('#phoneNumber').val();
    if (lastName.match(regexName) && firstName.match(regexName) && mail.match(regexMail) && phoneNumber.match(regexphone)){
      $('#displayInfo').html('Firstname : '+firstName+'<br>Lastname : '+lastName+'<br>Mail : '+mail+'<br>Phone number : '+phoneNumber);
    }else{
      alert('Bad input');
    }
  });
});
