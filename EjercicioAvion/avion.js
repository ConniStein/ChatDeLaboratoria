var avion ={
	piloto : {
		nombre : "Erich Hartmann",
		codigo : "Senior",
		edad : 28
	},
	aeromoza : {
		nombre : "Audrey Hepburn",
		idiomas : ["Español", "Ingles", "Portugues"]
	},
	aerolinea : "LAN",
	marca : "Boeing 737",
	asientos : [
		{numero: "1A", ocupado : false},
		{numero: "1B", ocupado : false},
		{numero: "2A", ocupado : true},
		{numero: "2B", ocupado : false},
		{numero: "3A", ocupado : true},
		{numero: "3B", ocupado : true},
	],
	año : 2014,
	primeraClase : true
};

var avionContainer = document.getElementById("avion-container");
avionContainer.innerHTML = "";
//llamar al atributo asientos del objeto avion
//hacer un for de los asientos
//comprobar si estan disponibles
//si es falso el asiento es verde
//colocar asientos 
var asientos = avion.asientos;
var a,contador;
contador = 1;
var cajaPeq;


for (var i = 0; i < asientos.length; i++) {
	a = document.createElement("div");
	a.innerHTML = asientos[i].numero;

	if (asientos [i].ocupado) {
		a.setAttribute("class","ocupado"); //aqui va la clase asiento
	}else{
		a.setAttribute("class","desocupado"); //aqui va la clase asiento
	}

	if(cajaPeq.children.lenght >= 2) {
		avionContainer.appendChild(cajaPeq);
		cajaPeq = document.createElement("div");
		cajaPeq.setAttribute("class","col s4");
		cajaPeq.appendChild(a);
	}else{
		cajaPeq.appendChild(a);
		contador ++;
	}

	avionContainer.appendChild(a);
};
