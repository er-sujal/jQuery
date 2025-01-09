$(document).ready(function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validName() {
    let uname = $("#name").val();
    if (uname != "") {
      $("#name").removeClass("is-invalid");
      return true;
    } else {
      $("#name").addClass("is-invalid");
      return false;
    }
  }

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

  function validRadio() {
    let rbtn = $('input[name="gender"]:checked').val();
    if (!rbtn) {
      $('input[name="gender"]').addClass("is-invalid");
      return false;
    } else {
      $('input[name="gender"]').removeClass("is-invalid");
      return true;
    }
  }

  function validDOB() {
    let dob = new Date($("#dob").val());
    const dateNow = new Date();
    if (dob < dateNow) {
      $("#dob").removeClass("is-invalid");
      return true;
    } else {
      $("#dob").addClass("is-invalid");
      return true;
    }
  }

  function validCont() {
    let cont = $("#country").val();
    if (!cont) {
      $("#country").addClass("is-invalid");
      return false;
    } else {
      $("#country").removeClass("is-invalid");
      return true;
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

  function validConPass() {
    if ($("#password").val() != $("#confirmPassword").val()) {
      $("#confirmPassword").addClass("is-invalid");
      return false;
    } else {
      $("#confirmPassword").removeClass("is-invalid");
      return true;
    }
  }

  function isCheckbox() {
    if (!$("#terms").is(":checked")) {
      $("#terms").addClass("is-invalid");
      return false;
    } else {
      $("#terms").removeClass("is-invalid");
      return true;
    }
  }

  function formValidate() {
    const isvalidName = validName();
    const isvalidEmail = validEmail();
    const isvalidRadio = validRadio();
    const isvalidDob = validDOB();
    const isvalidCount = validCont();
    const isvalidPass = validPassword();
    const isvalidConPass = validConPass();
    const isChecked = isCheckbox();

    console.log(isvalidName);
    console.log(isvalidEmail);
    console.log(isvalidRadio);
    console.log(isvalidDob);
    console.log(isvalidCount);
    console.log(isvalidPass);
    console.log(isvalidConPass);
    console.log(isChecked);

    return (
      isvalidEmail &&
      isvalidName &&
      isvalidRadio &&
      isvalidDob &&
      isvalidCount &&
      isvalidPass &&
      isvalidConPass &&
      isChecked
    );
  }

  $("#name").on("input", function () {
    validName();
  });
  $("#email").on("input", function () {
    validEmail();
  });
  $('input[name="gender"]').on("input", function () {
    validRadio();
  });
  $("#dob").on("input", function () {
    validDOB();
  });
  $("#country").on("input", function () {
    validCont();
  });
  $("#password").on("input", function () {
    validPassword();
  });
  $("#confirmPassword").on("input", function () {
    validConPass();
  });
  $("#terms").on("change", function () {
    isCheckbox();
  });

  $("#signupForm").on("submit", function (e) {
    if (!formValidate()) {
      e.preventDefault();
      console.log("Form not submitted");
    } else {
      alert("Signup successfully");
    }
  });
});
