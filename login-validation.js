$(document).ready(function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    if (!emailRegex.test($("#email").val())) {
      isValid = false;
      $("#email").addClass("is-invalid");
    } else {
      $("#email").removeClass("is-invalid");
    }


    if (isValid) {
      alert("Login successful!");
    }
  });

  $("#email").on("input", function () {
    if (!emailRegex.test($(this).val())) {
      $(this).addClass("is-invalid");
    } else {
      $(this).removeClass("is-invalid");
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
