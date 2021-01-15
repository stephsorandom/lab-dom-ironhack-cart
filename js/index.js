// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
//step 2
  let price = product.querySelector('.price span').innerHTML
let quantity = product.querySelector('.quantity input').value
//step 3
let totalPrice= (price * quantity)
product.querySelector('.subtotal span').innerHTML=totalPrice
 //step 4
totalPrice

// document.querySelector('price').value = "This is the price";
// document.querySelector('quantity').value = "This is the value"
  //... your code goes here
}







// ITERATION 2
  //... your code goes here

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test


  





  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
