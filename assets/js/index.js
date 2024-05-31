const nav = document.querySelector('header');
const courses = document.querySelector('.from-us');


window.onscroll= function(){
    if(window.scrollY>courses.offsetTop){
    nav.classList.add('scrollNavBar');
    }
else {
nav.classList.remove('scrollNavBar');
}
}
