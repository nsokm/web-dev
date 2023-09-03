document.addEventListener("DOMContentLoaded", function () {
  const gradeForm = document.getElementById("grade-form");
  const gradeInput = document.getElementById("grade");
  const gradeList = document.getElementById("grade-list");
  const averageGrade = document.getElementById("average");

  let grades = [];

  gradeForm.addEventListener("submit", function (e) {
      e.preventDefault();
  });

  document.getElementById("add-grade").addEventListener("click", function () {
      const newGrade = parseFloat(gradeInput.value);
      if (!isNaN(newGrade) && newGrade >= 0 && newGrade <= 100) {
          grades.push(newGrade);
          updateGradeList();
          calculateAverage();
          gradeInput.value = "";
      } else {
          alert("Please enter a valid grade between 0 and 100.");
      }
  });

  function updateGradeList() {
      gradeList.innerHTML = "";
      grades.forEach(function (grade, index) {
          const listItem = document.createElement("li");
          listItem.innerText = `Grade ${index + 1}: ${grade}`;
          gradeList.appendChild(listItem);
      });
  }

  function calculateAverage() {
      if (grades.length > 0) {
          const sum = grades.reduce((total, grade) => total + grade, 0);
          const average = sum / grades.length;
          averageGrade.innerText = `Average Grade: ${average.toFixed(2)}`;
      } else {
          averageGrade.innerText = "Average Grade: 0";
      }
  }
});
