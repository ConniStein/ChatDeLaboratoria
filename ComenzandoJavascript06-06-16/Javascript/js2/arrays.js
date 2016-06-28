//Ejercicio #1: Calculando DNI (ejercicio grupal)
/*var letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var DNI = parseInt(prompt("ingrese su DNI(solo numeros)"));
var letra = prompt("ingrese una letra");
letra = letra.toUpperCase();


function rut(){
	if(DNI <= 0 || DNI >= 99999999){
		alert("el numero ingresado no es valido, reingrese nuevamente")
	}
	else if(DNI > 0 && DNI < 99999999){
		var calculo = letrasDni[DNI % 23];
		if(calculo != letra){
			alert("la letra ingresada es incorrecta")
		}
		else{
			alert("el DNI ingresado es valido" + "\n" + DNI + "-" + letra )
		}
		// alert("el numero y letra es valido")


	}
	return calculo
}
calculo = rut();*/

//Ejercicio #2: Añadir elementos a un array con push (ciclo for)
/*var nombres = ["Hurón ", "Alpaca ", "Nutria ", "Marmota ", "Quokka "];
for (var i = 0; i < nombres.length; i++) {
	nombres.push()
}
prompt("Agregue un animal a la lista");
alert("Su lista de animales es: " + nombres);*/
//wat(no entiendo que pide el ejercicio)

//Ejercicio #3: Creando Arrays
var mesesDelAño = ["Enero ","Febrero ", "Marzo ","Abril ","Mayo ","Junio ","Julio ","Agosto ","Septiembre "
,"Octubre ", "Noviembre ", "Diciembre "];
alert("Los meses del año son " + mesesDelAño);