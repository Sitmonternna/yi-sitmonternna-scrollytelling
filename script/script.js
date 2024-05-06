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

// SROLLTRIGGER


/* chapitre 1 */

// SROLLTRIGGER

gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function() {
    // Configuration de l'animation pour chaque chapitre

    /* ---- Animation chapitre 1 ----- */
    gsap.set("#chap1", { opacity: 0, y: 50 }); // Cache le chapitre au départ
    gsap.to("#chap1", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap1",
        start: "top 80%", // Déclenche l'animation lorsque le haut du chapitre atteint 80% du viewport
        end: "bottom 20%", // Arrête l'animation lorsque le bas du chapitre atteint 20% du viewport
        toggleActions: "play none none none", // Animation déclenchée lorsque le chapitre entre en scène
        markers: true // Pour déboguer, affiche les marqueurs ScrollTrigger
      }
    });

    /* ---- Animation chapitre 2 ----- */
    gsap.set("#chap2", { opacity: 0}); 
    gsap.to("#chap2", {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: true
      }
    });

    /* ---- Animation chapitre 3 ----- */
    gsap.set("#chap3", { opacity: 0, scale: 0.5 });
    gsap.to("#chap3", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: true
      }
    });

    /* ---- Animation chapitre 4 ----- */
    gsap.set("#chap4", { opacity: 0, scale: 0.5 }); 
    gsap.to("#chap4", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap4",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: true
      }
    });
    /* ---- Animation chapitre 5 ----- */
    gsap.set("#chap5", { opacity: 0, scale: 0.5 }); 
    gsap.to("#chap5", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap5",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: true
      }
    });

    /* ---- Animation chapitre 6 ----- */
    gsap.set("#chap6", { opacity: 0, scale: 0.5 });
    gsap.to("#chap6", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap6",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: true
      }
    });

    /* ---- Animation chapitre 7 ----- */    
    gsap.set("#chap7", { opacity: 0, scale: 0.5 });
    gsap.to("#chap7", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap7",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: true
      }
    });
    /* ---- Animation chapitre 8 ----- */
    gsap.set("#chap8", { opacity: 0, scale: 0.5 });
    gsap.to("#chap8", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#chap8",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: true
      }
    });
  });


/*Animations */
/*constellation */
gsap.set(".constellation", {x:'0', y:'100vh', opacity:1, duration:5});
gsap.to(".constellation", {x:'0', y:'80vh', duration:1, opacity:1,repeat:-1,duration:5});

/* chapitre 1 {}*/


/* chapitre 2 */
/*------------------------etoile--------------------------------------------------*/ 
gsap.set(".star", {x:'70%', y:'60%'});
gsap.to(".star", {x:'70%', y:'50%', duration:1, repeat:-1, yoyo: true});

/* chapitre 3 */

/*-----------star avec animation inverse ------------------*/
gsap.timeline({repeat:-1,
    scrollTrigger:{
        markers: true,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "restart complete reverse reverse",
        trigger: "#star_avance"
    }
})
.to('.star_avance', {x:'-2vw', y:'-4vh', duration:1})
.to('.star_avance', {x:'-4vw', y:'2vh', duration:1})
.to('.star_avance', {x:'-6vw', y:'-4vh', duration:1})
.to('.star_avance', { x:'-8vw', y:'2vh', duration:1})
.to('.star_avance', {x:'-10vw', y:'-4vh', duration:1})
.to('.star_avance', { x:'-12vw', y:'2vh', duration:1})
.to('.star_avance', {x:'-14vw', y:'-4vh', duration:1})
.to('.star_avance', { x:'-16vw', y:'2vh', duration:1})


/*---------lit_bouge----------------------------------- */
gsap.set(".lit_complet_chap3", { x:0, y:0, duration: 1, repeat: -1, yoyo: true});
gsap.to(".lit_complet_chap3", {x:'20vw', y:0, duration: 10, repeat: -1,});


/* chapitre 4 */

/* boy tombe et atteri*/

gsap.timeline({repeat:-1})
.to('.tombe', {x:'0', y:'50vh', rotate: '360deg',duration:3})
.to('.tombe', {x:'0', y:'50vh', opacity:0, duration:1})
.to('.atterir', {opacity:1, duration:1});



gsap.timeline({repeat:-1})
.to('.star_lead', {x:'0', y:'30vh', rotate: '360deg',duration:5})
gsap.to(".star_lead", {x:0, y:'30vh', duration: 5});

/* chapitre 5 */

/* villain appear for the first time */
gsap.timeline({repeat:-1})
.to('.villain_appear', {opacity:1, x:'3vw',y:'3vh', duration:1})
.to('.villain_appear', {opacity:1, x:'2vw',y:'2vh', duration:1})
.to('.villain_appear', {opacity:1, x:'1vw',y:'3vh', duration:1})
.to('.villain_appear', {opacity:1, x:'2vw',y:'2vh', duration:1})

/*-----------star------------------*/
gsap.timeline({repeat:-1})
.to('.star_pyupyu', {x:0, y:0, duration:1})
.to('.star_pyupyu', {x:'1vw', y:0, duration:1})
.to('.star_pyupyu', {x:0, y:0, duration:1})
.to('.star_pyupyu', { x:'1vw', y:0, duration:1})
.to('.star_pyupyu', {x:0, y:0, duration:1})
.to('.star_pyupyu', { x:'1vw', y:0, duration:1})
.to('.star_pyupyu', {x:0, y:0, duration:1})
.to('.star_pyupyu', { x:'1vw', y:0, duration:1})

/* chapitre 6 */

/*---------------------------mot de encouragement------------------------------ */
gsap.timeline({repeat:-1})
.to('.mot_audace', {opacity:1, duration:1})
.to('.mot_audace', {opacity:0, duration:3})
.to('.mot_courage', {opacity:1, duration:1})
.to('.mot_courage', {opacity:0, duration:3})
.to('.mot_determination', {opacity:1, duration:1})
.to('.mot_determination', {opacity:0, duration:3})

/* stade de peur*/
gsap.timeline({repeat:-1})
.to('.peurDebut', {opacity:0, duration:2})
.to('.peurMiddle', {opacity:1, duration:1})
.to('.peurMiddle', {opacity:0, duration:1})
.to('.peurFin', {opacity:1, duration:1})
.to('.peurFin', {opacity:0, duration:1})


/* star*/
gsap.timeline({repeat:-1})
.to('.star_peur', {x:0, y:0, duration:1})
.to('.star_peur', {x:'1vw', y:0, duration:1})
.to('.star_peur', {x:0, y:0, duration:1})
.to('.star_peur', { x:'1vw', y:0, duration:1})
.to('.star_peur', {x:0, y:0, duration:1})
.to('.star_peur', { x:'1vw', y:0, duration:1})
.to('.star_peur', {x:0, y:0, duration:1})
.to('.star_peur', { x:'1vw', y:0, duration:1})

/* chapitre 7 */

/*danse joie */
gsap.timeline({repeat:-1})
.to('.joieDebut', {opacity:1, duration:3})
.to('.joieDebut', {opacity:0,  duration:1})
.to('.joieFin', {opacity:1, duration:1})
.to('.star_ours', {opacity:0, y: '-5vw',duration:3})
.to('.grand_ours', { opacity:1, duration:1})
.to('.grand_ours', {scale: 2, opacity:0, duration:2, y:'-7vw'})
.to('.joieFin', {opacity:0, duration:1})
.to('.choque', {opacity:1, duration:1})

/*  chapitre 8 */
/* waking from dream */
gsap.timeline({repeat:-1})
.to('.dort_reveille', {opacity:1, x:'0',y:'0', duration:3})
.to('.dort_reveille', {opacity:0, x:'0',y:'0', duration:3})
.to('.assisLit_reveille', {opacity:1, duration:1})

/*constellation */
gsap.set(".constellation_inverse", {x:'0', y:'65vh', opacity:1, duration:5});
gsap.to(".constellation_inverse", {x:'0', y:'90vh', duration:1, opacity:1, repeat:-1,duration:5});


/* motionPath */
gsap.registerPlugin(MotionPathPlugin);
gsap.to('.star_chap2', {
  motionPath:{
    path: '#pathCourber',
  },
  duration: 6,
  repeat: -1,
  yoyo: true,
})









