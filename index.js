let miProducto;

class Producto {
	constructor(nombre, precio, cantidad, compra, descuento, pagar){
	  this.nombre = nombre;
	  this.precio = precio;
	  this.cantidad = cantidad;
	  this.compra = compra;
	  this.descuento = descuento;
	  this.pagar = pagar;
	}

	compra = this.precio * this.cantidad;
	descuento = this.precio * 0.15;
	pagar = this.compra - this.descuento;

}


  function mostrarMensaje() {
	const OPCION = prompt("Bienvenido, ingrese los datos solicitados para efectuar su compra:");
  }

  function compraDeProducto() {
	let nombre = prompt("Ingrese nombre del producto");
	let precio = parseFloat(prompt("Ingrese precio del producto"));
	let cantidad = parseInt(prompt("Ingresa cantidad de productos"));
	let compra = parseInt(prompt("El total de su compra es de: "));
	let pagar = parseInt(prompt("Son "+ compra + " pesos."));

	const objetoProducto = new Producto(nombre, precio, cantidad, compra, descuento, pagar);
	return objetoProducto;
  }

