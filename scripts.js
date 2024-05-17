// volver arriba

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

// navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})