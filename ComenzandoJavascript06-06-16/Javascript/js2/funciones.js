//Ejercicio #1: El menor de los numeros
function numeromenor(num1, num2, num3){
	if (num1 < num2 && num1 < num3) {
		alert("El primer número es el menor");
	}
	else if (num2 < num3 && num2 < num1) {
		alert("El segundo número es menor");
	}
	else if (num3 < num2 && num3 < num1) {
		alert("El tercer numero es menor");
	}
	else{
		alert("Los tres números son iguales.")
	}
};

numeromenor(8,8,8)