const inputEl = document.querySelector('input#name-input');
const textEl = document.querySelector('h1');

inputEl.addEventListener('input', onInput);

function onInput(event) {
    if (event.currentTarget.value.length >= 1) { textEl.textContent = event.currentTarget.value } else { textEl.textContent = 'незнакомец'};
}
