$(function() {
  $("form[name='form']").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      subject: 'required',
      'mobile-number': 'required',
      message: 'required'
    },
    messages: {
      email: 'Please enter a valid email address',
      subject: 'Please enter a subject',
      'mobile-number': 'Please enter your phone number',
      message: 'Please enter a message'
    },
    submitHandler: function(form) {
      event.preventDefault();
      form.submit();
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      alert(
        `Submitted\nEmail: ${email.value}\nSubject: ${subject.value}\nMessage: ${message.value}`
      );
    }
  });
});
