const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientSet = document.querySelector('#ingredients');

const makeElements = items => {
  return items.map(item => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = item;

    return ingredientEl;
  });
}

const el = makeElements(ingredients);
ingredientSet.append(...el);



//for (let i = 0; i < ingredients.length; i++) {
  //  const ingredientEl = document.createElement('li');
    //ingredientEl.textContent = ingredients[i];
    
   // const ingredientSet = document.querySelector('#ingredients');
    //ingredientSet.append(ingredientEl);
//}


