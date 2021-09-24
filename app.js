let lead_image = document.querySelector('.lead-image img');
let header = document.getElementsByTagName('header')[0];

document.addEventListener('scroll', () => {
    let value = window.scrollY;

    lead_image.style.top = value * 0.25 + 'px';
    header.style.top = -value * .1 + 'px';
    console.log(lead_image);
});