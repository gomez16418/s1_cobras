/*js Julio*/

/*=================*/
/*     Dropdown    */
/*=================*/
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