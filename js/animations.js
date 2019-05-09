
//variable declarations
let buttonArray=document.querySelectorAll('.btn-cart');
let cartItems=document.querySelector('.cart-items');
let shoppingCart=document.querySelector('#cart-sidebar');
let cartDropdwn=document.querySelector('.fl-mini-cart-content');
let miniProductList=document.querySelector('#cart-sidebar');
let productName;
let placeholder=document.querySelector('#placeholder');




cartItems.innerHTML=0;

//sessionStorage reloading previously done orders on the same tab
if(sessionStorage){
    for(let x=0;x<sessionStorage.length/3;x++){
          let archie=x.toString();
          let cartSnipet='<li class="item first"><div class="item-inner"><a class="product-image" title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" href="#l"><img alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" src='+sessionStorage.getItem(archie+'b')+'></a><div class="product-details"><div class="access"><a class="btn-remove1" title="Remove This Item" href="#">Çıkar</a> <a class="btn-edit" title="Edit item" href="#"><i class="icon-pencil"></i><span class="hidden">Edit item</span></a> </div><!--access--><strong>1</strong> x <span class="price">'+sessionStorage.getItem(archie+'c')+'</span><p class="product-name"><a href="product-detail.html">'+sessionStorage.getItem(archie+'a')+'</a></p></div></div></li>';
          placeholder.insertAdjacentHTML('beforeend',cartSnipet);
          cartParameters();
         }
}





//code for the shopping cart on the list.html page
//
//
//


for(let i=0;i<buttonArray.length;i++){
  buttonArray[i].addEventListener('click',function(){
    cart(i,buttonArray[i]);
  })
};

//icrementing the shopping cart objects
function cart(p,z){

  //code for cartDD
    productName=z.parentElement.parentElement.querySelector('.product-name').innerText;
    let y=z.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute('src');
    let price=z.parentElement.previousElementSibling.querySelector('.price').innerText;
    let productImage=z.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute('src');
    let cartSnipet='<li class="item first"><div class="item-inner"><a class="product-image" title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" href="#l"><img alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" src='+productImage+'></a><div class="product-details"><div class="access"><a class="btn-remove1" title="Remove This Item" href="#">Çıkar</a> <a class="btn-edit" title="Edit item" href="#"><i class="icon-pencil"></i><span class="hidden">Edit item</span></a> </div><!--access--><strong>1</strong> x <span class="price">'+price+'</span><p class="product-name"><a href="product-detail.html">'+productName+'</a></p></div></div></li>';
    let archie=p;


    cartParameters();
    cartItems.parentElement.parentElement.parentElement.querySelector('.top-subtotal').innerText=cartItems.innerText+" items";
    sStorage(archie,productName,productImage,price);
    return placeholder.insertAdjacentHTML('beforeend',cartSnipet);

};
//session storage features
function sStorage(a,b,c,d){
  let p=a;
  let product=b;
  let image=c;
  let price=d;
  console.log(p+' '+product);
  sessionStorage.setItem(p+'a',product);
  console.log(product)
  sessionStorage.setItem(p+'b',image);
  console.log(image)
  sessionStorage.setItem(p+'c',price);
  console.log(price);
};

function cartParameters(){
  return cartItems.innerText++;
};
