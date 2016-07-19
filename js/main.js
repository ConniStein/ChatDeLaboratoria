// Parte 0 
$(document).ready(function(){
	var data, hora;

	$("#mensajes").keypress(function(){
		data = new Date();
		hora = data.getHours();
		var minutos = data.getMinutes();
		var hourMyMessage = hora+":"+minutos;
		var yourMessage = $("#mensajes").val();
		var chatMessage = $("#chat"); // DIV PADRE
		var myMessageChat = $("<div class='w-message'> <div class='w-message-out'> <div class='w-message-text'> <p>"+yourMessage+"</p> </div> <div class='time'>"+hourMyMessage+"</div>"+"</div></div>");
		
		if(event.which===13&&yourMessage!== ""){
			$("#mensajes").val("");
			chatMessage.append(myMessageChat);	
		}
	});

// Parte 1 
	$(".panel-list-message-contact").click(function(){
		$(".w-messages").empty();
	});

	$(".w-search-contacts").keypress(function(){
		if(event.which===13){
			var nameContact = $(".avatar");
			var texto = $(".w-search-contacts").val();
			texto = texto.toLowerCase();
			nameContact.show();
			for(var i=0; i< nameContact.size(); i++){
				var contenido = nameContact.eq(i).text();
				contenido = contenido.toLowerCase();
				var index = contenido.indexOf(texto);
				if(index == -1){
					nameContact.eq(i).hide();
				}		
			}
		}
	});
});


