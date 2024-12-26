$(document).ready(function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  $("#signupForm").on("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    if (!$("#name").val().trim()) {
      isValid = false;
      $("#name").addClass("is-invalid");
    } else {
      $("#name").removeClass("is-invalid");
    }

    if (!$('input[name="gender"]:checked').val()) {
      isValid = false;
      $('input[name="gender"]').addClass("is-invalid");
    } else {
      $('input[name="gender"]').removeClass("is-invalid");
    }

    if (!$("#dob").val()) {
      isValid = false;
      $("#dob").addClass("is-invalid");
    } else {
      $("#dob").removeClass("is-invalid");
    }

    if (!$("#country").val()) {
      isValid = false;
      $("#country").addClass("is-invalid");
    } else {
      $("#country").removeClass("is-invalid");
    }

    if (!passwordRegex.test($("#password").val())) {
      isValid = false;
      $("#password").addClass("is-invalid");
    } else {
      $("#password").removeClass("is-invalid");
    }

    if ($("#password").val() !== $("#confirmPassword").val()) {
      isValid = false;
      $("#confirmPassword").addClass("is-invalid");
    } else {
      $("#confirmPassword").removeClass("is-invalid");
    }

    // if (!$("#terms").is(":checked")) {
    //   isValid = false;
    //   $("#terms").addClass("is-invalid");
    // } else {
    //   $("#terms").removeClass("is-invalid");
    // }

    if (isValid) {
        alert("Signup successful!");
        window.location.href = "index.html";
    }
  });

  // Real-time validation
  $("#email").on("input", function () {
    if (!emailRegex.test($(this).val())) {
      $(this).addClass("is-invalid");
    } else {
      $(this).removeClass("is-invalid");
    }
  });

  $("#password").on("input", function () {
    if (!passwordRegex.test($("#password").val())) {
      $("#password").addClass("is-invalid");
    } else {
      $("#password").removeClass("is-invalid");
    }
  });

  $("#password, #confirmPassword").on("input", function () {
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    const feedbackElement = $("#passwordFeedback");
    const requirements = [];

    if (!/(?=.*[A-Z])/.test(password)) {
      requirements.push("at least one uppercase letter");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      requirements.push("at least one lowercase letter");
    }
    if (!/(?=.*\d)/.test(password)) {
      requirements.push("at least one number");
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      requirements.push("at least one special character (@, $, !, %, *, ?, &)");
    }
    if (password.length < 8) {
      requirements.push("a minimum of 8 characters");
    }

    if (requirements.length > 0) {
      feedbackElement
        .text(`Password must include ${requirements.join(", ")}.`)
        .show();
      $("#password").addClass("is-invalid");
    } else {
      feedbackElement.text("").hide();
      $("#password").removeClass("is-invalid");
    }
  });
});
