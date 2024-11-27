jQuery(document).ready(function($) {
  "use strict";

  // Contact form submission
  $('form.contactForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    var form = $(this);
    var f = form.find('.form-group');
    var ferror = false;
    var emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    // Validate inputs
    f.children('input, textarea').each(function() {
      var i = $(this); // Current input or textarea
      var rule = i.attr('data-rule'); // Get validation rule

      if (rule !== undefined) {
        var ierror = false; // Error flag for current field
        var pos = rule.indexOf(':', 0);
        var exp = pos >= 0 ? rule.substr(pos + 1) : '';

        rule = pos >= 0 ? rule.substr(0, pos) : rule;

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }

        // Show validation error message
        i.next('.validation').html(ierror ? (i.attr('data-msg') || 'wrong Input') : '').show();
      }
    });

    // If there are errors, don't submit the form
    if (ferror) return false;

    // Serialize the form data if we're not uploading files
    var formData = form.serialize();

    // Submit the form data via AJAX
    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: formData, // Send serialized data
      success: function(msg) {
        console.log(msg); // Log the server response to debug
        if (msg === 'Email successfully sent to recipient!') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          form.find("input, textarea").val(""); // Clear form
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg);
        }
      }
    });

    return false; // Prevent default form submission
  });
});
