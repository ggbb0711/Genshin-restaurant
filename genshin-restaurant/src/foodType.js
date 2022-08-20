    const db = require('./db.json');
    const loadFood=require('./loadFood.js');
    let main_content=document.querySelector('.main-content');



    function createFoodType(){
        let food_types=document.createElement('div');
        food_types.className='food_types';
        food_types.innerHTML=`
        <input type="checkbox" id="drop_arrow">
        <label for="drop_arrow">
            <i class="material-icons md-36">arrow_back_ios</i>
        </label>
        <div class="food_type flex">Appertizer</div>
        <div class="food_type flex">Main dish</div>
        <div class="food_type flex">Dessert & drinks</div>`;
        document.querySelector('.nav-bar').appendChild(food_types);

    //change food type
    document.querySelectorAll('.food_type')
    .forEach(foodType=>{
        foodType.addEventListener('click',()=>{
        if(document.querySelector('.carousel'))
        document.querySelector('.carousel').remove();
        main_content.innerHTML='';
        if(document.querySelector(`.${foodType.innerText.replaceAll(' ','-').replace('-&-','-')}-wrapper`))
        document.querySelector(`.${foodType.innerText.replaceAll(' ','-').replace('-&-','-')}-wrapper`).remove();
        localStorage.setItem('foodtype',foodType.innerText);
        foodSection=document.createElement('div');
        foodSection.className=`food-section ${foodType.innerText.replaceAll(' ','-').replace('-&-','-')}-wrapper`;
        foodSection.innerHTML=`
        <div class="food-title">
        ${foodType.innerText}
        <div class="border-line"></div>
        </div>
        <div class="food-content" id="${foodType.innerText.replaceAll(' ','-')}"></div>`;
        main_content.appendChild(foodSection);
        if(window.screen.width<=600){
            swapFoodType(foodType)
        }
        db[localStorage.getItem('region')][localStorage.getItem('foodtype')].forEach(food=>{
            loadFood.loadFood(food)
        })
    })});
    function swapFoodType(foodType){
        let cache=foodType.innerText;
        foodType.innerText=document.querySelector('.food_type:first-of-type').innerText;
        document.querySelector('.food_type:first-of-type').innerText=cache;
        document.querySelector('#drop_arrow').checked=false;
    };
    }


module.exports={createFoodType}