let header = document.getElementsByTagName('header')[0];
let burger = document.querySelector('.burger');
let nav = document.querySelector('header nav');
let mobileNav = document.querySelector('header .mobile-nav');
let navLinks = document.querySelectorAll('header nav a');
let navCircles = document.querySelectorAll('header nav .circle');

let lead_image = document.querySelector('.lead-image img');

document.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Parallax header and lead image
    lead_image.style.top = value * 0.25 + 'px';

    if (window.innerWidth >= 767.98) {
        header.style.top = -value * .1 + 'px';
    }

});

// Postloading animation

let navElements = document.querySelectorAll('header nav > *');
let aboutUs = document.querySelector('#about-us');

let postloadTl = gsap.timeline({paused: true})
postloadTl.from(lead_image, {y: -100, opacity: 0, duration: .5})
          .addLabel('leadImageOnload')
          .from(navElements, {y: -100, opacity: 0, stagger: .05})
          .from(aboutUs, {x: -100, opacity: 0}, 'leadImageOnload')

window.onload = () => postloadTl.play();

// Mobile nav animation
let mobileWindow = window.matchMedia('screen and (max-width:767.98px)');

if (mobileWindow.matches) {

    let navTl = gsap.timeline({reversed: true, paused: true});
    navTl.from(nav, {height: 0, duration: .3, ease: Power1.easeIn})
         .addLabel('showLinks')
         .from(navLinks, {x: 50, autoAlpha: 0, stagger: .1, duration: .3})
         .from(navCircles, {autoAlpha: 0, stagger: .2}, 'showLinks')


    function toggleNav() {
        navTl.reversed() ? navTl.play() : navTl.reverse();
        burger.classList.toggle('active');
    };

    burger.addEventListener('click', toggleNav);
    navLinks.forEach((el) => {
        el.addEventListener('click', toggleNav);
    });
};

// Rise Images

let shopImages = document.querySelectorAll(".shop div");
let shopSection = document.querySelector('#shop');
let workImages = document.querySelectorAll(".work__inner div");
let workSection = document.querySelector('#work');

let shopImagesTl = gsap.timeline({scrollTrigger: {
    trigger: shopSection,
    start: "top bottom"
}});
shopImagesTl.from(shopImages, {opacity: 0, stagger: .1, ease: Power1.easeInOut})

let workImagesTl = gsap.timeline({scrollTrigger: {
    trigger: workSection,
    start: "top bottom"
}});
workImagesTl.from(workImages, {opacity: 0, stagger: .1, ease: Power1.easeInOut})