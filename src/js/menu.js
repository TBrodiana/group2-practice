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