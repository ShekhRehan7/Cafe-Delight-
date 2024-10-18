
const navlinks=document.getElementById('nav-links')
const hamburger=document.getElementById('ham-burger');

hamburger.addEventListener('click', function (){
    navlinks.classList.toggle('nav-active')
});