class CarritoCompra{
    constructor(){
        this.carrito = []
    };

    agregarProducto(producto){
        this.carrito.push(producto);
    }

    calcularTotal(){
        let total = 0;
        this.carrito.forEach(producto => {
            total += producto.precio;
        })
        return total;
    }

    aplicarDescuento(porcentaje) {
        let sinDescuento = this.calcularTotal()
        let descuento = sinDescuento * (porcentaje / 100);
        return sinDescuento - descuento;
    }
    
}

module.exports = CarritoCompra


// const prueba = new CarritoCompra

// prueba.agregarProducto({nombre: 'jugo', precio: 20})
// prueba.agregarProducto({nombre: 'camisa', precio: 10})
// prueba.agregarProducto({nombre: 'pantalon', precio: 35})

// console.log(prueba.carrito[0]);
// const total = prueba.calcularTotal();
// console.log('se debe pagar :', total);

// const totalDescuento = prueba.aplicarDescuento(10)
// console.log('con descuento, ',totalDescuento);