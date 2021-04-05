
const itemEl = document.querySelectorAll('.item');
itemEl.forEach(elem => {
    console.log('Категория:', elem.firstElementChild.textContent);
    console.log('Количество елементов:', elem.lastElementChild.children.length);
}
);

    



