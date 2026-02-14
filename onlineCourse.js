function showExperience() {
    let yes = document.getElementById("experience_yes_sangam_27").checked;
    let details = document.getElementById("experienceDetails_sangam_27");
    if (yes) {
        details.style.display = "block";
    } else {
        details.style.display = "none";
        details.value = "";
    }
}


document.getElementById("experience_yes_sangam_27").onclick = showExperience;
document.getElementById("experience_no_sangam_27").onclick = showExperience;


function validateEnrollment() {

    let name = document.getElementById("studentname_sangam_27").value.trim();
    console.log(name);
    let email = document.getElementById("email_sangam_27").value.trim();
    console.log(email);
    let course = document.getElementById("course_sangam_27").value;

    let modeOnline = document.getElementById("online_sangam_27").checked;
    let modeOffline = document.getElementById("offline_sangam_27").checked;

    let experienceYes = document.getElementById("experience_yes_sangam_27").checked;
    let experienceNo = document.getElementById("experience_no_sangam_27").checked;
    let experienceDetails = document.getElementById("experienceDetails_sangam_27").value.trim();

    
    let namePattern = /^[A-Za-z\s]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (name === "" || email === "") {
        alert("Name and email are required.");
        return;
    }

    
    if (!namePattern.test(name)) {
        console.log("Name validation failed");
        alert("Name must contain only letters.");
        return;
    }

    
    if (!emailPattern.test(email)) {
        console.log("Email validation failed");
        alert("Please enter a valid email.");
        return;
    }

    
    if (course === "") {
        console.log("Course validation failed");
        alert("Please select a course.");
        return;
    }

    
    if (!modeOnline && !modeOffline) {
        console.log("Mode validation failed");
        alert("Please select mode of study.");
        return;
    }

    
    if (!experienceYes && !experienceNo) {
        console.log("Experience validation failed");
        alert("Please select if you have previous experience.");
        return;
    }

    
    if (experienceYes && experienceDetails === "") {
        console.log("Experience details validation failed");
        alert("Please provide your experience details.");
        return;
    }

    console.log("All validations passed");
    console.log("Enrollment Successful for : ", name, "Email: ", email);
    alert("Enrollment Successful!");
}
