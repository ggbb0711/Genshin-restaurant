const carousel=require('./carousel.js');
const loadFood=require('./loadFood.js');
const foodType=require('./foodType.js');
let root=document.documentElement;
let regionColor={
    'Mondstadt':'rgba(62,159,133)',
    'Liyue':'rgba(232,198,96)',
    'Inazuma':'rgba(99,51,174)'
};
let main_content=document.querySelector('.main-content');

    


//change region
    document.querySelectorAll('.region').forEach(region=>{
        region.addEventListener('click',()=>{
            if(region.parentNode.className==='full_screen_menu flex')
            closeFullScreen();
            if(document.querySelector('.carousel'))
            document.querySelector('.carousel').remove();
            if(document.querySelector('.food_types'))
            document.querySelector('.food_types').remove();
            localStorage.setItem('region',region.innerText);
            let curRegion=localStorage.getItem('region');
            root.style.setProperty('--background',`url(./photos/${curRegion}.jpg)`);
            root.style.setProperty('--region_color',regionColor[curRegion]);
            foodType.createFoodType();
            reSortFoodType();
            carousel.createCarousel();
            loadFood.loadAllFood();
        })
    })
//hamburger menu and resetting foodtype button for mobile
function reSortFoodType(){
    document.querySelector('.food_type:nth-of-type(1)')
    .innerText='Appertizer';
    document.querySelector('.food_type:nth-of-type(2)')
    .innerText='Main dish';
    document.querySelector('.food_type:nth-of-type(3)')
    .innerText='Dessert & drinks';
}

document.querySelector('.header i')
.addEventListener('click',()=>{
    document.querySelector('.full_screen_menu')
    .style.transition='0.5s';
    document.querySelector('.full_screen_menu')
    .style.transform='translateY(0)';
});

function closeFullScreen(){
    document.querySelector('.full_screen_menu')
    .style.transition='0.5s';
    document.querySelector('.full_screen_menu')
    .style.transform='translateY(-100%)';
}
document.querySelector('.full_screen_menu i')
.addEventListener('click',()=>{
    closeFullScreen()
})
module.exports={closeFullScreen}