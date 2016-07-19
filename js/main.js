
//Mostrar y esconder div con emojis
$("#botonEmoji").click(function() {
	$(".emojis").html("<img src ='Emoji Smiley/Emoji Smiley-01.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-02.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-03.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-04.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-05.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-06.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-07.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-08.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-09.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-10.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-11.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-12.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-13.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-14.png' class ='emoji-prop'></img>" + 
		"<img src ='Emoji Smiley/Emoji Smiley-15.png' class ='emoji-prop'></img>" );
	$("#botonEmoji").click(function() {
		$(".emojis").hide();
	});
});

//Seleccionar emoji
$(".emoji").click(function() {
	$("#mensajes").append(this);
});


//cambiar input por div content editable para poder ingresar imagenes 