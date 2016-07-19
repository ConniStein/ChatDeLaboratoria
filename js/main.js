
	// BUSCADOR FILTRADO CUANDO SE PRESIONA ENTER encontrar concactos
      $(document).ready(function(){
 
      $(".w-search-contacts").keypress(function(e) {
            //13 es el código de la tecla Enter
            if(e.which == 13) {
                  alert('Has buscado un contacto!');
            }
      });                       
});