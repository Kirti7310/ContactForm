$(document).ready(function() {
  $('#contact-form').on('submit', function(e) {
      e.preventDefault();

      let user_name = $('#name').val();
      let user_email = $('#email').val();
      let user_message = $('#message').val();

      $.ajax({
          url: 'index.php',
          method: 'POST',
          dataType: 'json',
          data: {
              name: user_name,
              email: user_email,
              message: user_message
          },
          success: function(response) {
              $('#response-message').html(response.message);

              $('#contact-form')[0].reset();
          },
          error: function() {
              console.log("Error occurred during the request!");
          }
      });
  });
});
