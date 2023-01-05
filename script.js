const submitButton = document.getElementById("submit");
// Get the input elements
const firstNameInput = document.querySelector(
  'input[placeholder="First Name"]'
);
const heightInput = document.querySelector(
  'input[placeholder="Height (meters)"]'
);
const weightInput = document.querySelector('input[placeholder="Weight (kg)"]');

submitButton.addEventListener("click", () => {
  const firstName = firstNameInput.Value;
  const height = heightInput.value;
  const weight = weightInput.value;
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("height", height);
  localStorage.setItem("weight", weight);
  window.location = "log.html";
});
