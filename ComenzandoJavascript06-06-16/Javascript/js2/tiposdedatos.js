//FALTA EJERCICIO 5 Y EJERCICIO 6 Y 7 ESTÁN MALOS


//Ejercicio #1: División de números
/*var numero1 = parseFloat(prompt("Ingrese un número"));
var numero2 = parseFloat(prompt("Ingrese otro número"));
var division = numero1 /numero2;
alert("El resultado de esta división es: " + division);
//si se dividen dos cadenas de texto el resultado es NaN (not a number)
//si se divide un número por 0 el resultado es "infinity"*/

//Ejercicio #2: Conversión de edad
/*var nombre = prompt("Ingresa tu nombre");
var edad = parseInt(prompt("Ingresa tu edad"));
var diasVividos = edad * 365;
alert("Sr/Sra. " + nombre + " , usted ha vivido: " + diasVividos + " días");*/

//Ejercicio #3: Formato de output
/*var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu primer apellido");
var poblacion = prompt("Ingresa la poblacion en que vives");
document.write("=============================" + "<br>" +"Hola " + nombre + " " + apellido + "<br>");
document.write("Adiós habitante de " + poblacion + "<br>" + "=============================")*/

//Ejercicio #4: Contadores
/*var numeroPrincipal = parseInt(prompt("Ingrese un número"));
var primerContador = numeroPrincipal + 5;
var segundoContador = primerContador + 21; 
var tercerContador = segundoContador - 4;
alert("Numero introducido: " + numeroPrincipal + "\n" + "Contadores: " + primerContador +" " + 
	segundoContador + " " + tercerContador);*/

//Ejercicio #5: Producto escalar


//Ejercicio #6: Calcular el punto medio
/*var x1 = parseInt(prompt("Ingrese el valor de x1"));
var y1 = parseInt(prompt("Ingrese el valor de y1"));
var x2 = parseInt(prompt("Ingrese el valor de x2"));
var y2 = parseInt(prompt("Ingrese el valor de y2"));
var resuelveX = (x1 + x2) / 2;
var resuelveY = (y1 + y2) / 2;
alert("El punto medio del segmento" + "\n" + "de extremos, los puntos:" + "\n" + "(" + x1 +"," + y1 + ")" + 
	" y " + "(" + x2 + "," + y2 + ") es: (" + resuelveX + "," + resuelveY + ")" );*/
//tiene algo mal la sintaxis


//Ejercicio #7: Area del circulo
/*var primerDato = prompt("¿Ingresará el valor del diámetro o del radio? (ingrese su respuesta en minúsculas");
var diametroRadio = ["diametro", "radio"];
var radio;
var diametro;
var area = 0;

if (diametroRadio = "diametro") {
	diametro = parseFloat(prompt("Ingrese el valor del diámetro del circulo"));
	var deDiametroARadio = diametro / 2;
	area = 3.14 * (deDiametroARadio*deDiametroARadio);
	alert("El area de este circulo es: " + area);
}
else if (diametroRadio = "radio") {
	radio = parseFloat(prompt("Ingrese el valor del radio del circulo"));
	area = 3.14 * (radio*radio);
	alert("El area de este circulo es: " + area);
};*/
//este igual tiene algo malo

//Ejercicio #8: Area del triángulo
/*var a = prompt("Escribe la base:")
var b = prompt("Escribe la altura:")
alert("Área= "+ (a*b)/2);*/

//Ejercicio #9: Calcular determinante de segundo orden
/*var numero1 = parseInt(prompt("Ingrese el primer elemento de la diagonal principal"));
var numero2 = parseInt(prompt("Ingrese el primer elemento de la diagonal secundaria"));
var numero3 = parseInt(prompt("Ingrese el segundo elemento de la diagonal principal"));
var numero4 = parseInt(prompt("Ingrese el segundo elemento de la diagonal secundaria"));
var A = (numero1* numero3) - (numero2*numero4);
alert("El determinante de segundo orden de esta matriz es: " + A);*/

//Ejercicio #10: Formato determinante de segundo orden
/*var numero1 = parseInt(prompt("Ingrese el primer elemento de la diagonal principal"));
var numero2 = parseInt(prompt("Ingrese el primer elemento de la diagonal secundaria"));
var numero3 = parseInt(prompt("Ingrese el segundo elemento de la diagonal principal"));
var numero4 = parseInt(prompt("Ingrese el segundo elemento de la diagonal secundaria"));
alert("Su matriz se verá de la siguiente manera: " + "\n" + 
	"A = [ " + numero1 +" " + numero2  + "\n"
	+ numero4 + " " + numero3 + "]");
//el tab no funciona en los alert (?)*/

