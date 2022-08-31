//код к section class="menu"

let divsMenuCard = document.querySelectorAll(".menu__card");

function changeMenuCard (){
    if(document.documentElement.clientWidth <= 743){
        for (let i = 0; i < divsMenuCard.length; i++) {
            if(i%2 == 0){
                divsMenuCard[i].classList.remove("card2");
                divsMenuCard[i].classList.add("card1");
            }else{
                divsMenuCard[i].classList.remove("card1");
                divsMenuCard[i].classList.add("card2");
            }
        }
    }else if(document.documentElement.clientWidth <= 1043){
        for (let i = 0; i < divsMenuCard.length; i++) {
            divsMenuCard[i].classList.remove("card2");
            divsMenuCard[i].classList.add("card1");
        }
        for (let i = 2; i < 4; i++) {
            divsMenuCard[i].classList.remove("card1");
            divsMenuCard[i].classList.add("card2");
        }
    }else if(document.documentElement.clientWidth > 1043){
        for (let i = 0; i < 3; i++) {
            divsMenuCard[i].classList.remove("card2");
            divsMenuCard[i].classList.add("card1");
        }
        for (let i = 3; i < 6; i++) {
            divsMenuCard[i].classList.remove("card1");
            divsMenuCard[i].classList.add("card2");
        }
    }
}

window.addEventListener('resize', changeMenuCard);
window.addEventListener('load', changeMenuCard);

//код к section class="all__menu"

let pizzaArray = [{
    src: "assets/img/pizza-1.jpg", alt:"pizza1", name: "Italian Pizza", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$2.90"},
    {src: "assets/img/pizza-2.jpg", alt:"pizza2", name: "Italian Pizza", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$2.90"}, {src: "assets/img/pizza-3.jpg", alt:"pizza3", name: "Italian Pizza", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$2.90"}];

let drinksArray = [{
    src: "assets/img/drink-1.jpg", alt:"drink1", name: "Cold Tea", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$3.90"},
    {src: "assets/img/drink-2.jpg", alt:"drink2", name: "Cherry Cocktail", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$4.90"},
    {src: "assets/img/drink-3.jpg", alt:"drink3", name: "Orange Cocktail", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$2.90"}];

let burgersArray = [{
    src: "assets/img/burger-1.jpeg", alt: "burger1", name: "Texas Burger", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$5.90"},
    {src: "assets/img/burger-2.jpeg", alt: "burger2", name: "Burger BBQ", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$4.90"},
    {src: "assets/img/burger-3.jpeg", alt: "burger3", name: "Beef Burger", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$6.90"}];

let pastaArray = [{
    src: "assets/img/pasta-1.jpg", alt: "pasta1",name: "Pasta Carbonara", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$3.90"},
    {src: "assets/img/pasta-2.jpg", alt: "pasta2", name: "Italian Pasta", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$2.90"},
    {src: "assets/img/pasta-3.jpg", alt: "pasta3", name: "Pasta Bolognese", description: "Far far away, behind the word mountains far from the countries Vokalia and Consonantia", price: "$3.50"}];

let allMenuLinks = document.querySelectorAll("a.menu__nav");
let allMenuImgs = document.querySelectorAll(".product__item .item__img img");
let allMenuNameProducts = document.querySelectorAll(".product__item .item__description h3");
let allMenuDescriptionProducts = document.querySelectorAll(".product__item .item__description p");
let allMenuPriceProducts = document.querySelectorAll(".product__item .item__description span");

function arrayLookup(link) {
    let array;
    if(link.classList.contains("pizza")){
        array = pizzaArray;
    }else if(link.classList.contains("drinks")){
        array = drinksArray;
    }else if(link.classList.contains("burgers")){
        array = burgersArray;
    }else if(link.classList.contains("pasta")){
        array = pastaArray;
    }
    return array;
}

function newPageMenu(array){
    for (let j = 0; j < allMenuImgs.length; j++) {
        allMenuImgs[j].src = array[j].src;
        allMenuImgs[j].alt = array[j].alt;
        allMenuNameProducts[j].textContent = array[j].name;
        allMenuDescriptionProducts[j].textContent = array[j].description;
        allMenuPriceProducts[j].textContent = array[j].price;
    }
}

for (let i = 0; i < allMenuLinks.length; i++) {
    const link = allMenuLinks[i];
    link.addEventListener("click", function(){
        let array = arrayLookup(link);
        newPageMenu(array);
        for (let j = 0; j < allMenuLinks.length; j++) {
            allMenuLinks[j].classList.remove("menu__nav__activ");
        };
        link.classList.add("menu__nav__activ");
    })
}

