document.getElementsByClassName("input")[1].innerHTML="This message was written via JS script! ";

var input = document.getElementsByClassName("icon btn-icon icon-send");
input[0].click();
function pressKey (){ 
  var e = jQuery.Event( "pulsación" ); 
  e . , que =  32 ;  // # espacio 
  $ ( ".input" ).gatillo( e ) [ 1 ]; 
  e . , que =  91 ; 
  $ ( ".input").del gatillo( e ) [ 1 ]; 
  e . , que =  32 ;  // # espacio 
  $ ( ".input" ).gatillo( e ) [ 1 ]; 
  e . , que =  32 ;  // # espacio 
  $ ( ".input").gatillo( e ) [ 1 ];

}