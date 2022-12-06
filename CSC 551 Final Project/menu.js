let carts = document.querySelectorAll('.cartButton');

/* Products that are in the menu */
let products = [
    {
        name: 'Spaghetti',
        tag: 'spaghetti',
        price: 11.00,
        inCart: 0
    },
    {
        name: 'Hamburger',
        tag: 'hamburger',
        price: 8.00,
        inCart: 0
    },
    {
        name: 'Hawaiian Pizza',
        tag: 'hawaiianpizza',
        price: 9.00,
        inCart: 0
    },
    {
        name: 'Fried Rice',
        tag: 'friedrice',
        price: 9.00,
        inCart: 0
    },
    {
        name: 'Sushi',
        tag: 'sushi',
        price: 6.00,
        inCart: 0
    },
    {
        name: 'Turkey Sandwich',
        tag: 'turkeysandwich',
        price: 7.00,
        inCart: 0
    },
    {
        name: 'Fried Chicken',
        tag: 'friedchicken',
        price: 6.00,
        inCart: 0
    },
    {
        name: 'Ceaser Salad',
        tag: 'ceasersalad',
        price: 7.00,
        inCart: 0
    },
];
for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        numbOfItems(products[i]);
        totalCost(products[i]);
    })
}
/* this function used for check the item in localStorage when refresh page
    only works when being called (refresh page)
*/
function onLoadnumbOfItems() {
    let productsNumber = localStorage.getItem('numbOfItems');

    if(productsNumber){
        document.querySelector('.cart span').textContent = productsNumber;
        
    }
}

/* this function used to add to cart the amount of items when user clicks "Add to cart"
button, this function is being called in the for loop above */
function numbOfItems(product) {
    let productsNumber = localStorage.getItem('numbOfItems');
    
    productsNumber = parseInt(productsNumber);
    
    if (productsNumber){
        localStorage.setItem('numbOfItems', productsNumber + 1);
                document.querySelector('.cart span').textContent = productsNumber + 1;

    }else{
        localStorage.setItem('numbOfItems', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItems(product);
}

function setItems(product){
    
    /* this line below is to avoid the same item added to cart
    multiple times, instead when clicked, the quantity increases */
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    /*this lines below allows user to add multiple different foods
    at once */
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    /* JSON to show the name, tag, price of products instead of objects */
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

/*This function gets the price of the food from products[array]
and calculate the total cost */

function totalCost(product) {
    /* Add the price of the item in localStorage,
    adding the price up if buyer buys 2 quantities */
    // console.log("totalCost is ", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log(typeof cartCost);
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    //make sure items are in cart-section
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpeg">
                <span>${item.name}</span>
            </div>
            <div class="product-price">$${item.price},00</div>
            <div class="product-quantity">
                <ion-icon class="decrease"
                name="arrow-down-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase"
                name="arrow-up-circle-outline"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price},00
            </div>
            `;
        }); //get the value of the items
        
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTitle">
                    Basket Total 
                </h4>
                <h4 class="basketTotal">
                    $${cartCost},00
                </h4>
        `;
    }
}

onLoadnumbOfItems();
displayCart();
function message() {
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    
    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}