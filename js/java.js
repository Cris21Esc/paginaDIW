
// let desplegable = document.getElementById("desplegable");
// document.addEventListener('DOMContentLoaded', function() {
//     let toggleIcon = document.querySelector('.toggle-icon');
//     let icon = document.getElementById("icon");
//     let navContainer = document.getElementById('nav-container');
  
    
//     if (toggleIcon && navContainer) {
//         toggleIcon.addEventListener('click', function() {
//           if( desplegable.style.display == "block"){
//             desplegable.style.display = "none";
//             navContainer.classList.toggle('pushed');
//           }
//           else{
//             icon.style.justifyContent = "flex-end";            
//             desplegable.style.display = "block";
//             desplegable.style.justifyContent = "flex-start";
//             navContainer.classList.toggle('pushed');
//           }
//         });
//     }
//   });

const nav = document.querySelector('nav')

document.querySelector('#burger').addEventListener('click',(e) => {
  e.currentTarget.classList.toggle("active")
  nav.classList.toggle('show')
})

var zFondos150 = ["url('./img/150x150/coche-1.jpg')","url('./img/150x150/coche-2.jpg')","url('./img/150x150/coche-3.jpg')","url('./img/150x150/coche-4.jpg')"];
var zFondos600 = ["url('./img/600x400/coche-1.jpg')","url('./img/600x400/coche-2.jpg')","url('./img/600x400/coche-3.jpg')","url('./img/600x400/coche-4.jpg')"];

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage=zFondos600[0];
subImagenes[0].style.backgroundImage=zFondos150[0];
subImagenes[1].style.backgroundImage=zFondos150[1];
subImagenes[2].style.backgroundImage=zFondos150[2];
subImagenes[3].style.backgroundImage=zFondos150[3];

subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);
subImagenes[3].addEventListener("mouseover",accion3);

function accion0(){imagenPrincipal.style.backgroundImage =zFondos600[0];}
function accion1(){imagenPrincipal.style.backgroundImage =zFondos600[1];}
function accion2(){imagenPrincipal.style.backgroundImage =zFondos600[2];}
function accion3(){imagenPrincipal.style.backgroundImage =zFondos600[3];}

/**
  URL CÓDIGO FUENTE: https://francescricart.com/como-generar-una-galeria-de-imagenes-de-producto-con-javascript/
*/