/*ANIMATION INTRO SCROLL DOWN */
gsap.set(".introScroll", { x:0, y:0, opacity:1, duration: 1, repeat: -1, yoyo: true, ease: "linear"});
gsap.to(".introScroll", {x:0, y:30, opacity: 0, duration: 1, repeat: -1, yoyo: true, ease: "linear"});

// Écouteur d'événement scroll
let scrollingTimer; 

window.addEventListener('scroll', function() {
    document.body.classList.add('is-scrolling');

    clearTimeout(scrollingTimer); // Annule le minuteur s'il existe déjà
    scrollingTimer = setTimeout(function() {
        document.body.classList.remove('is-scrolling'); // Enlève la classe .is-scrolling après 2000ms
    }, 2000);
});

/*------------------------etoile--------------------------------------------------*/ 
gsap.set(".star", {x:'70%', y:'60%'});
gsap.to(".star", {x:'70%', y:'50%', duration:1, repeat:-1, yoyo: true});

/*---------------------------mot chap 6--------------------------------------------------------- */

gsap.timeline()
.from('.mot_audace', {opacity:0, duration:2})
.from('.mot_audace', {opacity:1, duration:2})
.from('.mot_audace', {opacity:0, duration:2})
.from('.mot_courage', {opacity:0, duration:2})
.from('.mot_courage', {opacity:1, duration:2})
.from('.mot_courage', {opacity:0, duration:2})
.from('.mot_determination', {opacity:0, duration:3})
.from('.mot_determination', {opacity:1, duration:3})
.from('.mot_determination', {opacity:0, duration:3})

/* boy tombe et atteri chap 4*/
gsap.timeline()
.to('.tombe', {x:'0', y:'50vh', rotate: '360deg',duration:3})
.to('.tombe', {x:'0', y:'50vh', opacity:0, duration:1})
.to('.atterir', {opacity:1, duration:1})
.to('.roche', {scale: 0.5, duration:1})

/*moon to bear */
gsap.timeline()
.to('.star_ours', {opacity:0, y: '-5vw',duration:3})
.to('.grand_ours', { opacity:1, duration:1})
.to('.grand_ours', {scale: 2, opacity:0, duration:2, y:'-7vw'})


