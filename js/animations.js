//variable declarations

let buttonArray=document.querySelectorAll('.btn-cart');
let cartItems=document.querySelector('.cart-items');
let shoppingCart=document.querySelector('#cart-sidebar');
let cartDropdwn=document.querySelector('.fl-mini-cart-content');
let miniProductList=document.querySelector('#cart-sidebar');
let productName='fruit';
let placeholder=document.querySelector('#placeholder');

//






cartItems.innerText=0;

for(let i=0;i<buttonArray.length;i++){
  buttonArray[i].addEventListener('click',function(){
    cart();
    clickedProduct(buttonArray[i]);
    cartDD(buttonArray[i]);
    console.log(buttonArray[i].parentElement.previousElementSibling.querySelector('.regular-price').innerText);
  })
}
//icrementing the shopping cart objects
function cart(){
  cartItems.innerText++;
  cartItems.parentElement.parentElement.parentElement.querySelector('.top-subtotal').innerText=cartItems.innerText+" items";
};

//function that extracts information about clicked product
function clickedProduct(z){
  let y=z.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerText;

  console.log(y);
}
//function to display the products in the shopping cart
function cartDD(z){
let y=z.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute('src');
let productImage=z.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute('src');
let cartSnipet='<li class="item first"><div class="item-inner"><a class="product-image" title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" href="#l"><img alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" src='+productImage+'></a><div class="product-details"><div class="access"><a class="btn-remove1" title="Remove This Item" href="#">Çıkar</a> <a class="btn-edit" title="Edit item" href="#"><i class="icon-pencil"></i><span class="hidden">Edit item</span></a> </div><!--access--><strong>1</strong> x <span class="price">'+z.parentElement.previousElementSibling.querySelector('.price').innerText+'</span><p class="product-name"><a href="product-detail.html">'+productName+'</a></p></div></div></li>';
placeholder.insertAdjacentHTML('beforeend',cartSnipet);
//find way to append your extracted info into the the cart dropdown menu
//continue from here

};
