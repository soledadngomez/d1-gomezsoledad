function mostrarMenu() {
	const OPCION = prompt(
		"Bienvenido, seleccione una opción (presiona q para salir)\n1. Descuenta 20% \n2. Descuenta 50%");
	
	return OPCION;
}

function operaciones(num_descuento) {
	compraTotal = precio * cantidad;
	descuentoCuenta = (compraTotal * num_descuento) / 100;
	pagarTotal = compraTotal - descuentoCuenta;
}

function procesarDescuento(porcentaje) {
	let nombre = prompt("Ingrese nombre del producto");
	let precio = parseFloat(prompt("Ingrese precio del producto"));
	let cantidad = parseInt(prompt("Ingresa cantidad de productos"));

	compraTotal = precio * cantidad;
	descuentoCuenta = (compraTotal * porcentaje) / 100;
	pagarTotal = compraTotal - descuentoCuenta;

	alert("El total de su compra de " + nombre + " es de " + compraTotal + " pesos ");
	alert("Lo que te vamos a descontar son " + descuentoCuenta + " pesos");
	alert("El total a pagar es de " + pagarTotal + " pesos");
}

function procesarDatosIngresados() {
	let opcionSeleccionada = mostrarMenu();
	while (opcionSeleccionada?.toLowerCase() != "q") {
		if (opcionSeleccionada != "") {
			opcionSeleccionada = parseInt(opcionSeleccionada);
			if (!isNaN(opcionSeleccionada)) {
				switch (opcionSeleccionada) {
					case 1:
						console.log("entro a la opcion 1");

						let num_descuento = 20;
						procesarDescuento(num_descuento);

						alert("¡Gracias por su compra!");

						break;

					case 2:
						console.log("entro a la opcion 2");

						let num_descuento_2 = 50;
						procesarDescuento(num_descuento_2);

						alert("¡Gracias por su compra!");

						break;

					default:
						alert("Opcion Incorrecta");
						break;
				}
			} else {
				alert("Ingresó una letra");
			}
		} else {
			alert("Seleccione la opción");
		}
		opcionSeleccionada = mostrarMenu();
	}
}

function main() {
	procesarDatosIngresados();
}

main();
