/*==================================================
SCROLL REVEAL
==================================================*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}

});

},{

threshold:0.12,

rootMargin:"0px 0px -60px 0px"

});

sections.forEach(section=>{

section.classList.add("reveal");

observer.observe(section);

});