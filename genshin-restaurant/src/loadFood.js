const loadProduct=require('./loadProduct');
const db = require('./db.json');
let main_content=document.querySelector('.main-content');
let curFoodType;  



//load food
function loadAllFood() {
    main_content.innerHTML='';
    loadAppertizer();
    loadMainDish();
    loadDessertDrinks();
}
function loadFood(food) {
    let card = document.createElement('div');
    card.className = 'food-card';
    card.innerHTML = `
    <div class="food-name">${food.name}</div>
    <img class="food-image" src="./photos/${food.image}" alt="food">
    <div class="food-desc">${food.descr}</div>
    <div class="food-price">${food.price}</div>
    `;
        card.addEventListener('click',()=>{
            loadProduct.loadProduct(
                food.name,
                food.image,
                food.descr,
                food.price
            )
        })
    document.getElementById(`${localStorage.getItem('foodtype').replaceAll(' ','-')}`).appendChild(card);
}
function loadAppertizer(){
    if(document.querySelector('.Appertizer-wrapper'))
    document.querySelector('.Appertizer-wrapper').remove();
    localStorage.setItem('foodtype','Appertizer');
    foodSection=document.createElement('div');
    foodSection.className='food-section Appertizer-wrapper';
    foodSection.innerHTML=`
<div class="food-title">
    Appertizer
    <div class="border-line"></div>
</div>
<div class="food-content" id="Appertizer"></div>
    `;
    main_content.appendChild(foodSection);
    db[localStorage.getItem('region')][localStorage.getItem('foodtype')].forEach(food=>{
        loadFood(food)
    })
}
function loadMainDish(){
    if(document.querySelector('.Main-dish-wrapper'))
    document.querySelector('.Main-dish-wrapper').remove();
    localStorage.setItem('foodtype','Main dish');
    foodSection=document.createElement('div');
    foodSection.className='food-section Main-dish-wrapper';
    foodSection.innerHTML=`
    <div class="food-title">
    Main dish
    <div class="border-line"></div>
    </div>
    <div class="food-content" id="Main-dish"></div>`;
    main_content.appendChild(foodSection);
    db[localStorage.getItem('region')][localStorage.getItem('foodtype')].forEach(food=>{
        loadFood(food)
    })
}
function loadDessertDrinks(){
    if(document.querySelector('.Dessert-drinks-wrapper'))
    document.querySelector('.Dessert-drinks-wrapper').remove();
    localStorage.setItem('foodtype','Dessert & drinks');
    foodSection=document.createElement('div');
    foodSection.className='food-section Dessert-drinks-wrapper';
    foodSection.innerHTML=`
    <div class="food-title">
    Dessert & drinks
    <div class="border-line"></div>
    </div>
    <div class="food-content" id="Dessert-&-drinks"></div>`;
    main_content.appendChild(foodSection);
    db[localStorage.getItem('region')][localStorage.getItem('foodtype')].forEach(food=>{
        loadFood(food)
    })
}
loadAllFood();
module.exports={loadAllFood,loadFood}