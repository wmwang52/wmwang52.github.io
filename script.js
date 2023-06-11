const sr = ScrollReveal();

const options = {
  duration: 1000,
  distance: "100%",
  easing: "ease-out",
  delay: 100,
};

// Reveal animations
sr.reveal(".homeContent", { ...options, origin: "top" });
sr.reveal(".profileImage", { ...options, origin: "bottom" });
sr.reveal("#aboutContent", { ...options, origin: "right" });
sr.reveal("#aboutPhoto", { ...options, origin: "left" });
sr.reveal("#skillsContent", { ...options, origin: "left" });
sr.reveal("#skillsGrid", { ...options, origin: "left" });
sr.reveal("#courseNames", { ...options, origin: "left" });
sr.reveal("#courseToggleContainer", { ...options, origin: "left" });
sr.reveal("#courseGrid", { ...options, origin: "left" });

sr.reveal("#courseInformation", { ...options, origin: "right" });

sr.reveal(".projectContent", { ...options, origin: "left" });

sr.reveal(".projectImages", { ...options, origin: "right" });

sr.reveal("#contentInformation", { ...options, origin: "left" });





// Typed.js
var typed = new Typed("#typedDetails", {
  strings: ["Student", "iOS Developer", "Project Manager", "Photographer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Menu toggle
window.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector("#menuToggle");
  const menuIcon = document.querySelector(".menuIcon");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      menuIcon.textContent = "✕";
      menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
      menuIcon.textContent = "☰";
      menu.style.maxHeight = null;
    }
  });
});

// Skills toggle
const toggleSwitch = document.getElementById("toggleSwitch");
const skillsGrid = document.getElementById("skillsGrid");
const learningSkillsGrid = document.getElementById("learning-skillsGrid");
const skillsName = document.getElementById("skillsName");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    skillsGrid.style.display = "none";
    learningSkillsGrid.style.display = "grid";
    skillsName.textContent = "Other Skills";
  } else {
    skillsGrid.style.display = "grid";
    learningSkillsGrid.style.display = "none";
    skillsName.textContent = "Skills";
  }
});

// Course toggle
const courseToggleSwitch = document.getElementById("courseToggleSwitch");
const courseGrid = document.getElementById("courseGrid");
const businessGrid = document.getElementById("businessGrid");
const courseNames = document.getElementById("courseNames");

courseToggleSwitch.addEventListener("change", () => {
  if (courseToggleSwitch.checked) {
    courseGrid.style.display = "none";
    businessGrid.style.display = "grid";
    courseNames.textContent = "Business Administration Courses";
  } else {
    courseGrid.style.display = "grid";
    businessGrid.style.display = "none";
    courseNames.textContent = "Computer Science Courses";
  }
});

// Course information
var coursesGrids = document.querySelector(".coursesGrids");
var courseInformation = document.getElementById("courseInformation");

coursesGrids.addEventListener("click", function (event) {
  var target = event.target;
  var courseItem = target.closest(".courseItem");
  var description = courseItem
    .querySelector(".courseIcon")
    .getAttribute("data-description");
  courseInformation.innerHTML = "<h1>" + description + "</h1>";
});

// Update the event listener to include the parent div
var courseButtons = document.querySelectorAll(".courseItem");
courseButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    var description = button
      .querySelector(".courseIcon")
      .getAttribute("data-description");
    courseInformation.innerHTML = "<h1>" + description + "</h1>";
  });
});