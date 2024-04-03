/*ANIMATION INTRO SCROLL DOWN */
gsap.set(".introScroll", { x:0, y:0, opacity:1, duration: 1, repeat: -1, yoyo: true, ease: "linear"});
gsap.to(".introScroll", {x:0, y:30, opacity: 0, duration: 1, repeat: -1, yoyo: true, ease: "linear"});


// Animation de la sprite sheet
gsap.to(".animationpersonnage", {
    duration: 10,
    backgroundPosition: "-32768px",
    repeat: -1,
    ease: "steps(20)",
});

// Animation de la sprite sheet
gsap.to(".animationVillain", {
    duration: 8,
    backgroundPositionX: "-237600px",
    repeat: -1,
    ease: "steps(10)",
});


// Écouteur d'événement scroll

let scrollingTimer; 

window.addEventListener('scroll', function() {
    document.body.classList.add('is-scrolling');

    clearTimeout(scrollingTimer); // Annule le minuteur s'il existe déjà
    scrollingTimer = setTimeout(function() {
        document.body.classList.remove('is-scrolling'); // Enlève la classe .is-scrolling après 100ms
    }, 2000);
});

