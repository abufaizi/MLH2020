$('#open-signup-button').click(function() {
  $('#signup-modal').addClass('is-active');
});

$('#open-login-button').click(function() {
  $('#login-modal').addClass('is-active');
});

$('#close-signup-form').click(function() {
  $('#signup-modal').removeClass('is-active'); 
});

$('#close-login-form').click(function() {
  $('#login-modal').removeClass('is-active'); 
});