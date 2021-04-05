const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onMouseMoving);
function onMouseMoving(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
