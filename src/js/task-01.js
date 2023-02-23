// const navEl = document.querySelector('#categories');
// console.log(navEl);
// const totalNavEl = navEl.children;
//  console.log(totalNavEl);

 const liItemEl = document.querySelectorAll('li.item');
//  console.log(liItemEl);

 const numberCategories = liItemEl.length;

 console.log(`Number of categories: ${numberCategories}`);

 
 liItemEl.forEach(element =>{
    const categoryEl = element.firstElementChild;
    const elementsEl = element.lastElementChild.children;
    console.log(`Category: ${categoryEl.textContent}`);
    console.log(`Elements: ${elementsEl.length}`);
 });