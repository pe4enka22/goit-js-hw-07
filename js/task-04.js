const counter = document.querySelector('#value');
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');


let counterValue = 0;

decBtn.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

incBtn.addEventListener("click", () => {
   counterValue += 1;
    counter.textContent = counterValue;
});


