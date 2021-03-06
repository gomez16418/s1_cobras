var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/* Cuando se hace clic en los botones de menu, estos se abren y cierran.*/
function openDrpdown(x) {
    var x;

    switch (x) {
    	case 1:
    		x = document.getElementById("menu1");
    		break;
    	case 2:
    		x = document.getElementById("menu2");
    		break;
    }

    if (x.classList.contains('show'))
    {
    	x.classList.remove('show');
    	x = document.querySelectorAll("#menuBar li ul");
    	for(var i = 0; i < x.length; i++)
    	{
    		x[i].classList.remove('show');
    	}        
    }
    else
    { 	
    	x.classList.add("show");
    }
}
function desplegarMenu(x1) {
	x1.classList.toggle('desplegado');
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    document.getElementById('menuBar').classList.remove('desplegado');
  }
}
/* Abrir Buscar */
function buscarOpen(){
    var x = document.getElementById("searchWrapper");
    var y = document.getElementById("searchBox");
    var z = document.getElementById("cerrarBuscar");
    x.classList.add('buscarDivOpen');
    y.classList.add('buscarOpen');
    z.classList.add('mostrarX');
}
function buscarCerrar(){
    var x = document.getElementById("searchWrapper");
    var y = document.getElementById("searchBox");
    var z = document.getElementById("cerrarBuscar");
    x.classList.remove('buscarDivOpen');
    y.classList.remove('buscarOpen');
    z.classList.remove('mostrarX');
}