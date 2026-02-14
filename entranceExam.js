function validateForm() {
  let name = document.getElementById("fullname_sangam_27").value.trim();
  let dob = document.getElementById("dob_sangam_27").value;
  //   let age = document.getElementById("age_sangam_27").value;
  let phone = document.getElementById("phone_sangam_27").value.trim();
  let email = document.getElementById("email_sangam_27").value.trim();
  let gender = document.querySelector('input[name="gender_sangam_27"]:checked');
  let stream = document.getElementById("stream_sangam_27").value;
  let agree = document.getElementById("agree_sangam_27").checked;

  let namePattern = /^[A-Za-z\s]+$/;
  let phonePattern = /^(98|97)\d{8}$/;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || dob === "" || phone === "" || email === "") {
    alert("All fields are required.");
    return;
  }

  if (!namePattern.test(name)) {
    alert("Name must contain only letters.");
    return;
  }

  //   if (age < 16 || age > 30) {
  //     alert("Age must be between 16 and 30.");
  //     return;
  //   }

  if (!phonePattern.test(phone)) {
    alert("Phone must be 10 digits and start with 98 or 97.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Invalid email format.");
    return;
  }

  if (!gender) {
    alert("Please select gender.");
    return;
  }

  if (stream === "") {
    alert("Please select exam stream.");
    return;
  }

  if (!agree) {
    alert("You must confirm the details.");
    return;
  }

  document.getElementById("message_sangam_27").innerText =
    "Registration Successful! Page will refresh in 5 seconds.";

  setTimeout(function () {
    location.reload();
    //location is define as a global variable in browser environment, it represents the current URL and provides methods to manipulate it.
  }, 5000);
}
