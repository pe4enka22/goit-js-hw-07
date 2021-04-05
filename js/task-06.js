const inputEl = document.querySelector('input');
const inputElLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onBlur);
function onBlur(event) {
    if (event.currentTarget.value.length === Number(inputElLength)) {

        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
};
 
