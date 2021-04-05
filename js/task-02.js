const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];




for (let i = 0; i < ingredients.length; i++) { 
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredients[i];
    
    const ingredientSet = document.querySelector('#ingredients');
    ingredientSet.append(ingredientEl);
}


