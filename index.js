$(document).ready(function() {
  $('.sms-details').hide();

  $('input[type="radio"]').change(function() {
    if ($(this).val() === 'sms') {
      $('.email-details').hide();
      $('.sms-details').show();
    } else {
      $('.email-details').show();
      $('.sms-details').hide();
    }
  });
  $(form).submit(function() {
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    event.preventDefault();
    alert(
      `Submitted\nEmail: ${email.value}\nSubject: ${subject.value}\nMessage: ${message.value}`
    );
  });
});
