let main_content=document.querySelector('.main-content');


function loadProduct(name,img,descr,price){
    main_content.innerHTML=``;
    main_content.innerHTML=`
    <div class="product-card">
    <div class="food-title">
    ${name}
    <div class="border-line"></div>
    </div>
    <div class="product-content">
    <img src="./photos/${img}" alt="${img}" class="product-img">
    <div class="product-descr">${descr}</div>
    <div class="product-price">${price}</div>
    </div>
    </div>
    `
    if(document.querySelector('.carousel'))
    document.querySelector('.carousel').remove();
}
module.exports={loadProduct}