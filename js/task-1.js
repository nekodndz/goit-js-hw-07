const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of elements: ${items.length}`);

items.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const itemCount = item.querySelectorAll('ul li').length;
    
    console.log('Category:', categoryName);
    console.log('Elements:', itemCount);
})