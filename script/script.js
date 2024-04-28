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

/* chapitre 1 */



/* chapitre 2 */
/*------------------------etoile--------------------------------------------------*/ 
gsap.set(".star", {x:'70%', y:'60%'});
gsap.to(".star", {x:'70%', y:'50%', duration:1, repeat:-1, yoyo: true});

/* chapitre 3 */



/* chapitre 4 */

/* boy tombe et atteri*/
gsap.timeline({repeat:-1, yoyo: true})
.to('.tombe', {x:'0', y:'50vh', rotate: '360deg',duration:3})
.to('.tombe', {x:'0', y:'50vh', opacity:0, duration:1})
.to('.atterir', {opacity:1, duration:1})
.to('.roche', {scale: 0.5, duration:1})

/* chapitre 5 */

/* villain appear for the first time */
gsap.timeline({repeat:-1, yoyo: true})
.to('.villain_appear', {opacity:1, x:'3vw',y:'3vh', duration:1})
.to('.villain_appear', {opacity:1, x:'2vw',y:'2vh', duration:1})
.to('.villain_appear', {opacity:1, x:'1vw',y:'3vh', duration:1})
.to('.villain_appear', {opacity:1, x:'2vw',y:'2vh', duration:1})

/* chapitre 6 */

/*---------------------------mot de encouragement--------------------------------------------------------- */
gsap.timeline({repeat:-1, yoyo: true})
.from('.mot_audace', {opacity:0, duration:2})
.from('.mot_audace', {opacity:1, duration:2})
.from('.mot_audace', {opacity:0, duration:2})
.from('.mot_courage', {opacity:0, duration:2})
.from('.mot_courage', {opacity:1, duration:2})
.from('.mot_courage', {opacity:0, duration:2})
.from('.mot_determination', {opacity:0, duration:3})
.from('.mot_determination', {opacity:1, duration:3})
.from('.mot_determination', {opacity:0, duration:3})

/* chapitre 7 */

/*moon to bear */
gsap.timeline({repeat:-1, yoyo: true})
.to('.star_ours', {opacity:0, y: '-5vw',duration:3})
.to('.grand_ours', { opacity:1, duration:1})
.to('.grand_ours', {scale: 2, opacity:0, duration:2, y:'-7vw'})


/*  chapitre 8 */
/* waking from dream */
gsap.timeline({repeat:-1, yoyo: true})
.to('.dort', {opacity:1, x:'0',y:'0', duration:3})
.to('.dort', {opacity:0, x:'0',y:'0', duration:3})
.to('.assisLit', {opacity:1, duration:1})












