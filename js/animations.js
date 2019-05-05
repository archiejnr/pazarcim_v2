
let buttonArray=document.querySelectorAll('.btn-cart');
let cartItems=document.querySelector('.cart-items');
cartItems.innerText=0;
let cartDropdwn=document.querySelector('.fl-mini-cart-content');
let miniProductList=document.querySelector('#cart-sidebar');
for(let i=0;i<buttonArray.length;i++){
  buttonArray[i].addEventListener('click',function(){
    cart();
    clickedProduct(buttonArray[i]);
  })
}
//icrementing the shopping cart objects
function cart(){
  cartItems.innerText++;
};

//function that extracts information about clicked product
function clickedProduct(z){
  let y=z.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerText;
  console.log(y);
}
//function to display the products in the shopping cart
function cartDD(z){
let y=z.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute('src');
//find way to append your extracted info into the the cart dropdown menu
//continue from here
};
