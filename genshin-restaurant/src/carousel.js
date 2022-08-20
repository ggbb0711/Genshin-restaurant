//carousel
const loadProduct=require('./loadProduct');
const db = require('./db.json');
let carousel=document.querySelector('.carousel_slider');
let carousel_counter=1;





function createCarousel(){
    let carousel=document.createElement('div');
    carousel.className='carousel';
    carousel.innerHTML=`
    <div class="forward arrow">
    <i class="material-icons md-36">arrow_forward_ios</i>
</div>
<div class="backward arrow">
    <i class="material-icons md-36">arrow_back_ios</i>
</div>
<div class="carousel_slider">
</div>
    `;
    document.querySelector('.main-body').insertBefore(carousel,document.querySelector('.content'));
    carousel=document.querySelector('.carousel_slider');
    let forward=document.querySelector('.forward');
    let backward=document.querySelector('.backward');
    let carousel_counter=1;
//forward button
forward.addEventListener('click',()=>{
    if(carousel_counter===5 )return
    carousel_counter++;
    carousel.style.transition='all 0.5s';
    carousel.style.transform=`translateX(-${carousel_counter*100}%)`;

})
//backward button
backward.addEventListener('click',()=>{
    if(carousel_counter===0 )return
    carousel_counter--;
    carousel.style.transition='all 0.5s';
    carousel.style.transform=`translateX(-${carousel_counter*100}%)`;
})
carousel.addEventListener('transitionend',()=>{
    if(carousel_counter===5){
        carousel_counter=1;
        carousel.style.transition='none';
        carousel.style.transform=`translateX(-${carousel_counter*100}%)`; 
    }
    else if(carousel_counter===0){
        carousel_counter=4;
        carousel.style.transition='none';
        carousel.style.transform=`translateX(-${carousel_counter*100}%)`; 
    }
})
    carousel.style.transform=`translateX(-${carousel_counter*100}%)`;
    loadCarouselCard();
}


function loadCarouselCard(){
    let carousel=document.querySelector('.carousel_slider');
    //cloning to avoid same slide
    carousel.innerHTML='';
    let clonedb=JSON.parse(JSON.stringify(db));
    let foodType=['Appertizer','Main dish','Dessert & drinks'];
    for(let i=0;i<4;i++){
        let randomFoodType=foodType[Math.floor(Math.random()*foodType.length)];
        let foodArr=clonedb[localStorage.getItem('region')][randomFoodType];
        let randomFoodIndex=Math.floor(Math.random()*foodArr.length)
        let food=foodArr[randomFoodIndex]
        let carousel_card=document.createElement('div');
        carousel_card.className='carousel-card';
        carousel_card.innerHTML=`
        <p class="carousel-name">${food.name}</p>
        <img src="./photos/${food.image}" alt="${food.image.split('.')[0]}" class="carousel-image">
        <div class="carousel-descr">${food.descr}</div>
        <div class="carousel-price">${food.price}</div>`;
        carousel_card.addEventListener('click',()=>{
            loadProduct.loadProduct(
                food.name,
                food.image,
                food.descr,
                food.price
            )
        })
        carousel.appendChild(carousel_card);
        //deleting same slide
        clonedb[localStorage.getItem('region')][randomFoodType].splice(randomFoodIndex,1);
        if(clonedb[localStorage.getItem('region')][randomFoodType].length===0) foodType.splice(foodType.indexOf(randomFoodType),1);
    }
    let first_carousel_card=document.querySelectorAll('.carousel-card')[0].cloneNode(true);
    let last_carousel_card=document.querySelectorAll('.carousel-card')[3].cloneNode(true);
    first_carousel_card.id='first-carousel-card';
    last_carousel_card.id='last_carousel_card';
    carousel.appendChild(first_carousel_card);
    carousel.prepend(last_carousel_card);
}
module.exports={loadCarouselCard,createCarousel}