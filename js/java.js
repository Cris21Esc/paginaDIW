
let desplegable = document.getElementById("desplegable");
document.addEventListener('DOMContentLoaded', function() {
    let toggleIcon = document.querySelector('.toggle-icon');
    let icon = document.getElementById("icon");
    let navContainer = document.getElementById('nav-container');
  
    
    if (toggleIcon && navContainer) {
        toggleIcon.addEventListener('click', function() {
          if( desplegable.style.display == "block"){
            desplegable.style.display = "none";
            navContainer.classList.toggle('pushed');
          }
          else{
            icon.style.justifyContent = "flex-end";            
            desplegable.style.display = "block";
            desplegable.style.justifyContent = "flex-start";
            navContainer.classList.toggle('pushed');
          }
        });
    }
  });