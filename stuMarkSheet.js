function generateMarksheet() {
  let name = document.getElementById("studentname_sangam_27").value.trim();
  let roll = document.getElementById("roll_sangam_27").value;
  let eng = document.getElementById("english_sangam_27").value;
  let math = document.getElementById("math_sangam_27").value;
  let sci = document.getElementById("science_sangam_27").value;

  if (name === "" || roll === "" || eng === "" || math === "" || sci === "") {
    alert("All fields are required.");
    return;
  }

  eng = Number(eng);
  math = Number(math);
  sci = Number(sci);

  if (eng < 0 || eng > 100 || math < 0 || math > 100 || sci < 0 || sci > 100) {
    alert("Marks must be between 0 and 100.");
    return;
  }

  let total = eng + math + sci;
  let percentage = total / 3;

  let result;
  let grade;

  if (eng >= 40 && math >= 40 && sci >= 40) {
    result = "Pass";

    if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 60) {
      grade = "B";
    } else {
      grade = "C";
    }
  } else {
    result = "Fail";
    grade = "Fail";
  }

  document.getElementById("output_sangam_27").innerHTML = 
        "Student Name: " + name + "<br>" +
        "Roll Number: " + roll + "<br>" +
        "Total Marks: " + total + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Result: " + result + "<br>" +
        "Grade: " + grade;
}
