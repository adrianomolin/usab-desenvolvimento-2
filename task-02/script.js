const form = document.getElementById('form');
const fields = form.querySelectorAll('input');
const result = document.getElementById('result');

// Function to clear all fields
function clearAll() {
  fields.forEach(field => field.value = '');
  result.textContent = '';
}

// Function to validate the form
function validateForm() {
  let valid = true;

  fields.forEach(field => {
    if (!field.value) {
      field.classList.add('error');
      valid = false;
    } else {
      field.classList.remove('error');
    }
  });

  // Specific validation for the password confirmation field
  if (valid && document.getElementById('password').value !== document.getElementById('confirm-password').value) {
    document.getElementById('confirm-password').classList.add('error');
    valid = false;
  }

  // If the form is valid, display JSON data
  if (valid) {
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const jsonString = JSON.stringify(jsonData, null, 2);

    const textarea = document.createElement('textarea');
    textarea.value = jsonString;
    textarea.readOnly = true;
    textarea.style.width = '100%';
    textarea.style.height = '150px';

    result.appendChild(textarea);
  }
}

// Event listeners
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  validateForm();
});

document.getElementById('clear-all').addEventListener('click', clearAll);