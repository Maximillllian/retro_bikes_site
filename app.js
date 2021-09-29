let header = document.getElementsByTagName('header')[0];
let burger = document.querySelector('.burger');
let nav = document.querySelector('header nav');
let mobileNav = document.querySelector('header .mobile-nav');
let navLinks = document.querySelectorAll('header nav a');
let navCircles = document.querySelectorAll('header nav .circle');

let lead_image = document.querySelector('.lead-image img');
let work_images = document.querySelectorAll(".work .large-img, .work .little-img");

document.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Parallax header and lead image
    lead_image.style.top = value * 0.25 + 'px';

    if (window.innerWidth >= 767.98) {
        header.style.top = -value * .1 + 'px';
    }

});

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