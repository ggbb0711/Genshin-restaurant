const {closeFullScreen}=require('./region');
let root=document.documentElement;




document.querySelectorAll('.about')
.forEach(about=>{
    about.addEventListener('click',()=>{
        if(about.parentNode.className==='full_screen_menu flex')
        closeFullScreen();
        if(document.querySelector('.food_types'))
        document.querySelector('.food_types').remove();
        if(document.querySelector('.carousel'))
        document.querySelector('.carousel').remove();
        root.style.setProperty('--background',`url(./photos/celestia.jpg)`);
        root.style.setProperty('--region_color','rgb(0, 140, 255)');
        document.querySelector('.main-content').innerHTML=`
        <div class="product-card">
        <div class="food-title">
        About
        <div class="border-line"></div>
        </div>
        <div>
        Hi this is my solution for the restaurant page of the Odin project. It was just going to be a simple website that has a few food images and descriptions, but then one thing after another and here I am writing code for bascically 3 diffrent menus, a carousel and a search button :(. At least it was fun (despite costing me a month to make). Sorry for all the spaghetti code and weird class/function/file name. All arts and images are from <a href="https://www.hoyoverse.com/">HOYOVERSE</a>.The discriptions are from the <a href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki">fan wiki</a>. You can contact me at my <a href="https://github.com/ggbb0711"> github account</a>.
        </div>
        `
    })
})