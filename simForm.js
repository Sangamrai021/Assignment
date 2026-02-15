function validateSIM() {

    let name = document.getElementById("fullname_sangam_27").value.trim();
    let citizenship = document.getElementById("citizenship_sangam_27").value.trim();
    let simType = document.querySelector('input[name="simtype_sangam_27"]:checked');
    let dob = document.getElementById("dob_sangam_27").value;
    let nationality = document.getElementById("nationality_sangam_27").value;
    let terms = document.getElementById("terms_sangam_27").checked;

    let namePattern = /^[A-Za-z\s]+$/;
    let citizenshipPattern = /^\d{10,}$/;

    if(name === "" || citizenship === "" || dob === "" || nationality === "") {
        alert("All fields are required.");
        return;
    }
    
    if(!namePattern.test(name)) {
        alert("Name must contain only letters.");
        return;
    }

    
    if(!citizenshipPattern.test(citizenship)) {
        alert("Citizenship must contain only digits and be at least 10 numbers.");
        return;
    }

    let birthDate = new Date(dob);
    let todayDate = new Date();
    let age = todayDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = todayDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 ||
       (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())) {
        age--;
    }

    if(age < 18) {
        alert("Age must be 18 or above.");
        return;
    }
    
    if(!simType) {
        alert("Please select SIM type.");
        return;
    }

    if(nationality === "") {
        alert("Please select nationality.");
        return;
    }
    
    if(!terms) {
        alert("You must accept Terms & Conditions.");
        return;
    }

    document.getElementById("message_sangam_27").innerText =
        "SIM Registration Successful!";
}
