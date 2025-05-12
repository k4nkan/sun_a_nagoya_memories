const openButton = document.getElementById("openForm");
const closeButton = document.getElementById("closeForm");
const formContainer = document.querySelector(".upload-form-container");
const formSelecter = document.getElementById("day-selector-in-form");
const headerSelecter = document.getElementById("day-selector");

function closeForm() {
  formContainer.style.display = "none";
}

function openForm() {
  formContainer.style.display = "flex";
  formSelecter.value = headerSelecter.value;
}

openButton?.addEventListener("click", (e) => {
  e.preventDefault();
  openForm();
});

closeButton?.addEventListener("click", (e) => {
  e.preventDefault();
  closeForm();
});
