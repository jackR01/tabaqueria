// volver arriba

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

// navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

//carrusel 
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
    //click en puntos
    punto.forEach((cadapunto,i) => {
        punto[i].addEventListener('click',()=>{
            let posicion = i
            let operacion = posicion * -50

            grande.style.transform = `translateX(${operacion}%)`
            punto.forEach( (cadapunto,i) =>{
                punto[i].classList.remove('activo')
            })
            punto[i].classList.add('activo')
        })
    })

//acordeon 
const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')

h2.forEach(( cadaH2 ,i ) => {
    h2[i].addEventListener('click', () => {

        bloque.forEach( ( cadaBloque , i) =>{
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    })
})
