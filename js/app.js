const toggle = document.querySelectorAll('.toggle-mobile-menu')[0];
const navLinks = document.querySelectorAll('.nav-links')[0];
const arrow = document.querySelectorAll('.arrow')[0];
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',()=>{
hamburger.classList.toggle('is-active');
});

toggle.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('clicked');
    navLinks.classList.toggle('active');
});

arrow.addEventListener('click',()=>{
    let xCoord = 800;
    let yCoord = 800;
    window.scrollTo(xCoord, yCoord);
})