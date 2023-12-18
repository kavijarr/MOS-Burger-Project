let burgers = [{
    "name": "Classic Burger",
    "id" : "B1001",
    "size" : "Large",
    "discount" : "0%",
    "price" : 750.00,
    "img" : "./assets/img/burgers/classic burger.jpg"
},
{
    "name": "Classic Burger",
    "id" : "B1002",
    "size" : "Regular",
    "discount" : "15%",
    "price" : 1500.00,
    "img" : "./assets/img/burgers/classic burger.jpg"
},
{
    "name": "Turkey Burger",
    "id" : "B1003",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 1600.00,
    "img" : "./assets/img/burgers/turkey burger.jpg"
},
{
    "name" : "Chicken Burger",
    "id" : "B1004",
    "size" : "Large",
    "discount" : "0%",
    "price" : 1400,
    "img" : "./assets/img/burgers/chicken burger.jpg"
},
{
    "name" : "Chicken Burger",
    "id" : "B1005",
    "size" : "Regular",
    "discount" : "20%",
    "price" : 800,
    "img" : "./assets/img/burgers/chicken burger.jpg"
},
{
    "name" : "Cheese Burger",
    "id" : "B1006",
    "size" : "Large",
    "discount" : "0%",
    "price" : 1000,
    "img" : "./assets/img/burgers/cheese burger.jpeg"
},
{
    "name" : "Cheese Burger",
    "id" : "B1007",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 600,
    "img" : "./assets/img/burgers/cheese burger.jpeg"
},
{
    "name" : "Bacon Burger",
    "id" : "B1008",
    "size" : "Regular",
    "discount" : "15%",
    "price" : 650,
    "img" : "./assets/img/burgers/bacon burger.jpg"
},
{
    "name" : "Shawarma Burger",
    "id" : "B1009",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 800,
    "img" : "./assets/img/burgers/shawarma burger.jpg"
},
{
    "name" : "Olive Burger",
    "id" : "B1010",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 1800,
    "img" : "./assets/img/burgers/olive burger.jpg"
},
{
    "name" : "Double Cheese Burger",
    "id" : "B1012",
    "size" : "Regular",
    "discount" : "20%",
    "price" : 1250,
    "img" : "./assets/img/burgers/double cheese burger.jpeg"
},
{
    "name" : "Crispy Chicken Burger",
    "id" : "B1013",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 1200,
    "img" : "./assets/img/burgers/crispy-chicken-burger.jpg"
},
{
    "name" : "Crispy Chicken Burger",
    "id" : "B1014",
    "size" : "Large",
    "discount" : "0%",
    "price" : 1600,
    "img" : "./assets/img/burgers/crispy-chicken-burger.jpg"
},
{
    "name" : "Paneer Burger",
    "id" : "B1015",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 900,
    "img" : "./assets/img/burgers/crispy-chicken-burger.jpg"
},
];

let submarines=[{
    "name" : "Crispy Chicken Submarine",
    "id" : "B1016",
    "size" : "Large",
    "discount" : "0%",
    "price" : 2000,
    "img" : "./assets/img/submarines/crispy chicken submarine.png"
},
{
    "name" : "Crispy Chicken Submarine",
    "id" : "B1017",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 1500,
    "img" : "./assets/img/submarines/crispy chicken submarine.png"
},
{
    "name" : "Chicken Submarine",
    "id" : "B1018",
    "size" : "Large",
    "discount" : "3%",
    "price" : 1800,
    "img" : "./assets/img/submarines/chicken submarine.jpg"
},
{
    "name" : "Chicken Submarine",
    "id" : "B1019",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 1400,
    "img" : "./assets/img/submarines/chicken submarine.jpg"
},
{
    "name" : "Grinder Submarine",
    "id" : "B1020",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 2300,
    "img" : "./assets/img/submarines/grinder submarine.jpg"
},
{
    "name" : "Cheese Submarine",
    "id" : "B1021",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 2200,
    "img" : "./assets/img/submarines/cheese submarine.jpg"
},
{
    "name" : "Double Cheese n Chicken Submarine ",
    "id" : "B1022",
    "size" : "Regular",
    "discount" : "16%",
    "price" : 1900,
    "img" : "./assets/img/submarines/chicken cheese submarine.jpg"
},
{
    "name" : "Special Horgie Submarine ",
    "id" : "B1023",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 2800,
    "img" : "./assets/img/submarines/hoagie submarine.jpg"
},
{
    "name" : "MOS Special Submarine",
    "id" : "B1024",
    "size" : "Regular",
    "discount" : "0%",
    "price" : 3000,
    "img" : "./assets/img/submarines/special submarine.jpeg"
},
];

let burgersList = document.querySelector('.burgers');
let submarineList = document.querySelector('.submarines');

function loadBurgers(){
    burgers.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('col-lg-6');
        newDiv.innerHTML = `
        <div class="products rounded-4">
        <img src="${value.img}" id="productImg" class="product-img" alt="">
        <label for="productImg" class="ms-4 text-center">${value.name} (${value.size}) (${value.id}) <br/> ${value.discount} Discount </label><br>
        <p class="text-center price">Rs. ${value.price}.00</p>
        <div class="text-center"><button class="btn btnAddtoCard">Add to Cart</button></div>
      </div> 
      `;
        burgersList.appendChild(newDiv);
    })
}

function loadSubmarines(){
    submarines.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('col-lg-6');
        newDiv.innerHTML = `
        <div class="products rounded-4">
        <img src="${value.img}" id="productImg" class="product-img" alt="">
        <label for="productImg" class="ms-4 text-center">${value.name} (${value.size}) (${value.id}) <br/> ${value.discount} Discount </label><br>
        <p class="text-center price">Rs. ${value.price}.00</p>
        <div class="text-center"><button class="btn btnAddtoCard">Add to Cart</button></div>
      </div> 
      `;
        submarineList.appendChild(newDiv);
    })
}

function scrollSubmarine(){
    const submarine = document.getElementById("sub");
    submarine.scrollIntoView();
}

function scrollBurger(){
    const burger = document.getElementById("burger");
    burger.scrollIntoView();
}

loadBurgers();
loadSubmarines();


