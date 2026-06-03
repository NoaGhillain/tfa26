'use strict'

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.accueilTitle').classList.add('visible');
    }, 500);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.v1').classList.add('visible');
    }, 800);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.v2').classList.add('visible');
    }, 1100);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.v3').classList.add('visible');
    }, 1400);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.v4').classList.add('visible');
    }, 1700);
});




const visu = document.querySelector(".visuel__link");
const overlay = document.querySelector(".transition");

visu.addEventListener("click", function(e){

    e.preventDefault();

    const url = this.href;

    overlay.classList.add("active");

    overlay.addEventListener("transitionend", function(){

        // attendre 2 secondes
        setTimeout(() => {
            sessionStorage.setItem("transition", "true");
            window.location.href = url;
        }, 2000);

    }, { once:true });

});


const visu2 = document.querySelector(".visu2");
const overlay2 = document.querySelector(".transition2");

visu2.addEventListener("click", function(e){

    e.preventDefault();

    const url = this.href;

    overlay2.classList.add("active");

    overlay2.addEventListener("transitionend", function(){

        // attendre 2 secondes
        setTimeout(() => {
            sessionStorage.setItem("transition", "true");
            window.location.href = url;
        }, 2000);

    }, { once:true });

});

const visu3 = document.querySelector(".visu3");
const overlay3 = document.querySelector(".transition3");

visu3.addEventListener("click", function(e){

    e.preventDefault();

    const url = this.href;

    overlay3.classList.add("active");

    overlay3.addEventListener("transitionend", function(){

        // attendre 2 secondes
        setTimeout(() => {
            sessionStorage.setItem("transition", "true");
            window.location.href = url;
        }, 2000);

    }, { once:true });

});

const visu4 = document.querySelector(".visu4");
const overlay4 = document.querySelector(".transition4");

visu4.addEventListener("click", function(e){

    e.preventDefault();

    const url = this.href;

    overlay4.classList.add("active");

    overlay4.addEventListener("transitionend", function(){

        // attendre 2 secondes
        setTimeout(() => {
            sessionStorage.setItem("transition", "true");
            window.location.href = url;
        }, 2000);

    }, { once:true });

});

const visu5 = document.querySelector(".visu5");
const overlay5 = document.querySelector(".transition5");

visu5.addEventListener("click", function(e){

    e.preventDefault();

    const url = this.href;

    overlay5.classList.add("active");

    overlay5.addEventListener("transitionend", function(){

        // attendre 2 secondes
        setTimeout(() => {
            sessionStorage.setItem("transition", "true");
            window.location.href = url;
        }, 2000);

    }, { once:true });

});

