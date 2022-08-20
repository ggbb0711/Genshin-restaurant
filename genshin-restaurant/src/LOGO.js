let root=document.documentElement;

function createHomePage(){
    if(document.querySelector('.food_types'))
    document.querySelector('.food_types').remove();
    if(document.querySelector('.carousel'))
    document.querySelector('.carousel').remove();
    root.style.setProperty('--background',`url(./photos/celestia.jpg)`);
    root.style.setProperty('--region_color','rgb(0, 140, 255)');
    document.querySelector('.main-content').innerHTML=`
    <div class="product-card">
    <div class="food-title">
    Welcome to my Genshin restaurant fan page
    <div class="border-line"></div>
    </div>
    <div>
    Hi this is a fan page all about the food of the three curent regions that is available in the game Genshin Impact. Click one of the 3 region on the header to discover each one delicacies.
    </div>
    `
}


document.querySelector('.logo').addEventListener('click',()=>{
    createHomePage()
})

createHomePage()