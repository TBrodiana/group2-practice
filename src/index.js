// Test import of a JavaScript module
import { example } from '@/js/example'

//Slider JS files (added by Tetiana)
import 'js/_slick.min'
import 'js/_script'


// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// // Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        speed:3000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});


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