const db = require('./db.json');
const { loadFood } = require('./loadFood');
let root=document.documentElement;




document.addEventListener('keydown',(e)=>{
    if(e.code==='Enter'&&document.querySelector('.search').value!==''&&document.querySelector('.search')===document.activeElement){
        root.style.setProperty('--background',`url(./photos/celestia.jpg)`);
        root.style.setProperty('--region_color','rgb(0, 140, 255)');
        let searchWord=document.querySelector('.search').value;
        document.querySelector('.search').value='';
        document.querySelector('.main-content').innerHTML='';
        if(document.querySelector('.food_types'))
        document.querySelector('.food_types').remove();
        if(document.querySelector('.carousel'))
        document.querySelector('.carousel').remove();
        if(document.querySelector('.Result-wrapper'))
        document.querySelector('.Result-wrapper').remove();
        localStorage.setItem('foodtype','Result');
        foodSection=document.createElement('div');
        foodSection.className='food-section Result-wrapper';
        foodSection.innerHTML=`
        <div class="food-title">
        ${searchWord} search result
        <div class="border-line"></div>
        </div>
        <div class="food-content" id="Result"></div>`;
        document.querySelector('.main-content').appendChild(foodSection);
        for(const region in db){
            for(const foodType in db[region]){
                db[region][foodType].forEach(food=>{
                    if(food.name.includes(searchWord)){
                        loadFood(food);
                    }
                })
            }
        }
    }
})