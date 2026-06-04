'use strict'

if (document.body.classList.contains("home")) {
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

            setTimeout(() => {
                sessionStorage.setItem("transition", "true");
                window.location.href = url;
            }, 1500);

        }, { once:true });

    });



    const visu2 = document.querySelector(".visu2");
    const overlay2 = document.querySelector(".transition2");
    
    visu2.addEventListener("click", function(e){
    
        e.preventDefault();
    
        const url = this.href;
    
        overlay2.classList.add("active");
    
        overlay2.addEventListener("transitionend", function(){
    
            setTimeout(() => {
                sessionStorage.setItem("transition", "true");
                window.location.href = url;
            }, 1500);
    
        }, { once:true });
    
    });
    
    
    
    const visu3 = document.querySelector(".visu3");
    const overlay3 = document.querySelector(".transition3");
    
    visu3.addEventListener("click", function(e){
    
        e.preventDefault();
    
        const url = this.href;
    
        overlay3.classList.add("active");
    
        overlay3.addEventListener("transitionend", function(){
    
            setTimeout(() => {
                sessionStorage.setItem("transition", "true");
                window.location.href = url;
            }, 1500);
    
        }, { once:true });
    
    });
    
    const visu4 = document.querySelector(".visu4");
    const overlay4 = document.querySelector(".transition4");
    
    visu4.addEventListener("click", function(e){
    
        e.preventDefault();
    
        const url = this.href;
    
        overlay4.classList.add("active");
    
        overlay4.addEventListener("transitionend", function(){
    
            setTimeout(() => {
                sessionStorage.setItem("transition", "true");
                window.location.href = url;
            }, 1500);
    
        }, { once:true });
    
    });
    
  }

  if (document.body.classList.contains("rubrique")) {

    const visu = document.querySelector(".visuel__link");
    const overlay = document.querySelector(".transition");

    visu.addEventListener("click", function(e){

        e.preventDefault();

        const url = this.href;

        overlay.classList.add("active");

        overlay.addEventListener("transitionend", function(){

            setTimeout(() => {
                sessionStorage.setItem("transition", "true");
                window.location.href = url;
            }, 1500);

        }, { once:true });

    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__title').classList.add('visible');
        }, 100);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__h2').classList.add('visible');
        }, 400);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__txt').classList.add('visible');
        }, 400);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__img').classList.add('visible');
        }, 700);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__link').classList.add('visible');
        }, 1000);
    });




    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__title').classList.add('actif');
        }, 100);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__h2').classList.add('actif');
        }, 400);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__txt').classList.add('actif');
        }, 400);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__img').classList.add('actif');
        }, 700);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.header__link').classList.add('actif');
        }, 1000);
    });

  }



  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: "0px 0px -150px 0px"
  });

  document.querySelectorAll('.fade').forEach(el => {
    observer.observe(el);
  });




