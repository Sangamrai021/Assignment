function bookAppointment() {
    let name = document.getElementById("patientname_sangam_27").value.trim();
    let age = document.getElementById("age_sangam_27").value.trim();
    let phone = document.getElementById("phone_sangam_27").value.trim();
    let department = document.getElementById("department_sangam_27").value;
    let appointmentDate = document.getElementById("appointment_sangam_27").value;
    let timeslot = document.getElementById("timeslot_sangam_27").value;

    
    let namePattern = /^[A-Za-z\s]+$/;
    let phonePattern = /^(98|97)\d{8}$/;

    
    let today = new Date();
    today.setHours(0,0,0,0); 
    let selectedDate = new Date(appointmentDate);

    
    if (name === "" || !namePattern.test(name)) {
        alert("Please enter a valid name (letters only).");
        return;
    }

    
    if (age === "" || Number(age) <= 0) {
        alert("Please enter a valid age greater than 0.");
        return;
    }

    
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits and start with 98 or 97.");
        return;
    }

    
    if (department === "") {
        alert("Please select a department.");
        return;
    }

    
    if (appointmentDate === "" || selectedDate < today) {
        alert("Appointment date cannot be in the past.");
        return;
    }

    
    if (timeslot === "") {
        alert("Please select a time slot.");
        return;
    }

    alert("Appointment booked successfully for " + name + "!");
}
