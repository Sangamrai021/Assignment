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
        alert("Name must contain only letters.");
        return;
    }

    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    
    if (course === "") {
        alert("Please select a course.");
        return;
    }

    
    if (!modeOnline && !modeOffline) {
        alert("Please select mode of study.");
        return;
    }

    
    if (!experienceYes && !experienceNo) {
        alert("Please select if you have previous experience.");
        return;
    }

    
    if (experienceYes && experienceDetails === "") {
        alert("Please provide your experience details.");
        return;
    }

    alert("Enrollment Successful!");
}
