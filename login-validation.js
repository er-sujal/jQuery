$(document).ready(function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validEmail() {
    let email = $("#email").val();
    if (emailRegex.test(email)) {
      $("#email").removeClass("is-invalid");
      return true;
    } else {
      $("#email").addClass("is-invalid");
      return false;
    }
  }

  function validPassword() {
    const password = $("#password").val();
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
      return false;
    } else {
      feedbackElement.text("").hide();
      $("#password").removeClass("is-invalid");
      return true;
    }
  }

  function formValidate() {
    const isvalidEmail = validEmail();
    const isvalidPass = validPassword();

    console.log(isvalidEmail);
    console.log(isvalidPass);

    return isvalidEmail && isvalidPass;
  }

  $("#email").on("input", function () {
    validEmail();
  });
  $("#password").on("input", function () {
    validPassword();
  });

  $("#loginForm").on("submit", function (e) {
    if (!formValidate()) {
      e.preventDefault();
      console.log("Form not submitted");
    } else {
      alert("Login successfully");
    }
  });
});
