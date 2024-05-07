
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
// SROLLTRIGGER
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function() {

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

/* parallax*/

gsap.to('#parallaxe-bg-1', {
  y:'40vh', 
  scrollTrigger:{
      markers: true,
      start: "top 90%",
      end: "bottom 20%",
      trigger: "#parallaxe-bg-1",
      scrub: 1}}
)
  
gsap.to('#parallaxe-bg-2', {
  y:'20vh', 
  scrollTrigger:{
      markers: true,
      start: "top 90%",
      end: "bottom 20%",
      trigger: "#parallaxe-bg-2",
      scrub: 1}}
)

gsap.to('#parallaxe-bg-3', {
  y:'-50vh', 
  scrollTrigger:{
      markers: true,
      start: "top 90%",
      end: "bottom 10%",
      trigger: "#parallaxe-bg-3",
      scrub: 1}}
)

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


gsap.registerPlugin(DrawSVGPlugin);
gsap.fromTo('#path_etoile',
{drawSVG: '0% 0%'
},
{drawSVG: '0% 100%',
duration: 2,
ease: "power1.inOut",
repeat:-1
})
gsap.registerPlugin(TextPlugin);

const animTexteChap1 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap1.to("#texteChap1", {
  duration: 4,
  text: {
    value: "Polaris, un jeune garçon passionné d’astronomie, s’endort une nuit en rêvant de voyager parmi les étoiles. Dans son rêve, il explore un univers magique rempli d’ étoiles vivantes et de créatures célestes."
  }, 
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(animTexteChap1, {
  scrollTrigger: {
    trigger: ".texteChap1", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});

const animTexteChap2 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap2.to(".texteChap2", {
  duration: 7,
  text: {
    value: "Lors de son réveil, Polaris réalise qu’il n’ est pas dans sa chambre et qu’ il y a une étoile proche de lui.L’ étoile s’introduit qu’elle est Muscida et qu’elle l’ accompagnera durant son séjour dans ce monde magique."
  }, 
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(animTexteChap2, {
  scrollTrigger: {
    trigger: ".texteChap2", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});

const animTexteChap3 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap3.to(".texteChap3", {
  duration: 4,
  text: {
    value: "Après sa rencontre de l’ étoile Muscida, une étoile brillante et bienveillante qui lui explique les mystères de ce monde fantastique. Muscida devient son guide et lui apprend à naviguer à travers les constellations vivantes."
  }, 
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(animTexteChap3, {
  scrollTrigger: {
    trigger: ".texteChap3", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});

const animTexteChap4 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap4.to(".texteChap4", {
  duration: 4,
  text: {
    value: "Lors de sa marche guidée par Muscida, Polaris tombe soudainement tombé dans un trou invisible et heureusement il atterrit sur une roche, survivant à cette malchance."
  }, 
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(animTexteChap4, {
  scrollTrigger: {
    trigger: ".texteChap4", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});

const animTexteChap5 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap5.to(".texteChap5", {
  duration: 4,
  text: {
    value: "Sur son chemin, Polaris rencontre l’ombre, une force sombre qui cherche à éteindre les étoiles et plonger le monde dans les ténèbres. Il doit affronter cette menace pour protéger la lumière et la vie dans cet univers merveilleux."
  }, 
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(animTexteChap5, {
  scrollTrigger: {
    trigger: ".texteChap5", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});


const animTexteChap6 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap6.to(".texteChap6", {
  duration: 4,
  text: {
    value: " Grâce à son courage, sa détermination et l’ aide précieuse de Muscida, Polaris parvient à vaincre l’ombre. Les étoiles brillent à nouveau avec éclat, symbolisant la victoire de la lumière sur les ténèbres."
  }, 
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to(animTexteChap6, {
  scrollTrigger: {
    trigger: ".texteChap6", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});

const animTexteChap7 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap7.to(".texteChap7", {
  duration: 10,
  text: {
    value: "Content de sa victoire contre les ténèbres, Polaris et Muscida célèbrent leur victoire en dansant une danse de joie. Suite à cette aventure Muscida révèle sa vraie nature et Polaris leur perçoit qui devient la constellation de la grande ours."
  }, 
  ease: "power2.inOut"
});
gsap.to(animTexteChap7, {
  scrollTrigger: {
    trigger: ".texteChap7", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});

const animTexteChap8 = gsap.timeline({
  repeat: -1,
  yoyo: true
});
animTexteChap8.to("#texteChap8", {
  duration: 10,
  text: {
    value: "Au réveil, Polaris réalise que son voyage onirique n’ était pas seulement un rêve, mais une source d’inspiration pour sa vie quotidienne. Sa passion pour les étoiles et l’univers continue de le guider, lui donnant la force de poursuivre ses rêves et de découvrir encore plus de merveilles dans le cosmos infini."
  }, 
  ease: "power2.inOut"
}); 
gsap.to(animTexteChap8, {
  scrollTrigger: {
    trigger: "#texteChap8", // Déclencher l'animation lorsque cet élément est visible
    start: "top 80%", // Déclencher l'animation lorsque 80 % de l'élément texte est visible
    end: "bottom top",
    scrub: true // Défilement fluide
  },
  time: 0
});

gsap.registerPlugin(MorphSVGPlugin);
gsap.to(".path_etoile",{
  morphSVG: {
    shape: ".coeur"
  },
  duration: 2,
  repeat: -1
});

/*spritesheet
ajouter scroll pour faire de x 'a x 
*/
gsap.to(".animationmarche_chap5",{
  x: "-30vw",
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
    trigger: '.animationmarche_chap5',
  }
})


gsap.to(".animationmarche",{
  x: "-47vw",
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
    trigger: '.animationmarche',
  }
})

gsap.to(".animationVillain",{
  x: "20vw",
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
    trigger: '.animationVillain',
  }
})