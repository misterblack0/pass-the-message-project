const button = document.querySelector('.btn');
const input = document.querySelector('input');
const message = document.querySelector('.last-message');
const alert = document.querySelector('.alert');
var inputMessage = '';

input.addEventListener('change', function () {
  inputMessage = input.value;
});

button.addEventListener('click', function () {
  if (input.value === '') {
    alert.style.display = 'block';
    setTimeout(function () {
      alert.style.display = 'none';
    }, 2000);
  } else {
    message.textContent = inputMessage;
    input.value = '';
  }
});
