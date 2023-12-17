let burgers = [{
    "name": "Chicken Burger",
    "id" : "B001",
    "price" : 1500.00,
    "img" : "./assets/img/burgers/chicken burger.jpg"
},
{
    "name": "Chicken Burger",
    "id" : "B001",
    "price" : 1500.00,
    "img" : "./assets/img/burgers/chicken burger.jpg"
},
{
    "name": "Chicken Burger",
    "id" : "B001",
    "price" : 1600.00,
    "img" : "./assets/img/burgers/chicken burger.jpg"
}
];
let burgersList = document.querySelector('.burgers');

function initApp(){
    burgers.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="col-4 border me-5 ms-3 rounded-3 products">
        <img src="${value.img}" id="productImg" class="product-img" alt="">
        <label for="productImg" class="text-center ms-5">${value.name}${value.id}</label>
        <p class="text-center">${value.price}</p>
        <div class="text-center"><button class="btn btnAddtoCard">Add to Cart</button></div>
      </div> 
      `;
        burgersList.appendChild(newDiv);
    })
}
initApp();