// First, find all password input fields on the page with readonly set
const passwordFields = document.querySelectorAll('input[type="password"][readonly="readonly"]');

for (let i=0; i < passwordFields.length; i++) {
  passwordFields[i].removeAttribute('readonly');
  passwordFields[i].setAttribute('autocomplete', 'current-password')
}
