$(document).ready(function() {
  $('.sms-details').hide();
  $('#email-cross').hide();
  $('#sms-tick').hide();
  $('#email-button').css('background', '#e9faff');
  $('.submit-button').attr('disabled', true);

  $('#email-button').click(function() {
    $(this).css('background', '#e9faff');
    $('#sms-button').css('background', '#ffffff');

    $('.email-details').show();
    $('.sms-details').hide();
    $('#email-tick').show();
    $('#email-cross').hide();
    $('#sms-tick').hide();
    $('#sms-cross').show();
  });

  $('#sms-button').click(function() {
    $(this).css('background', '#e9faff');
    $('#email-button').css('background', '#ffffff');

    $('.email-details').hide();
    $('.sms-details').show();
    $('#sms-tick').show();
    $('#sms-cross').hide();
    $('#email-tick').hide();
    $('#email-cross').show();
  });

  $('input,textarea').keyup(function() {
    if (
      $('#email').val() &&
      $('#subject').val() &&
      $('#message').val() !== ''
    ) {
      $('.submit-button').attr('disabled', false);
    }
    if ($('#mobile-number').val() && $('#message').val()) {
      $('.submit-button').attr('disabled', false);
    }
  });
});
