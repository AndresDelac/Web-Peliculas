const carritoCompra = require('../index')

describe('tests de los metodos de la clase', () => {
    it('El constructor debe ser un array vacio', () => {
        const carritoMio = new carritoCompra();
        expect(carritoMio.carrito).toEqual([]);
    })

    it('agregar un preoducto al carrito', ()=> {
        const carritoMio = new carritoCompra
        carritoMio.agregarProducto({nombre: 'huevos', precio: 20})
        expect(carritoMio.carrito).toEqual([{nombre: 'huevos', precio: 20}])
    })

    it('Calcula el total de la compra', ()=> {
        const carritoMio = new carritoCompra
        carritoMio.agregarProducto({nombre: 'jugo', precio: 20})
        carritoMio.agregarProducto({nombre: 'cereal', precio: 24})
        expect(carritoMio.calcularTotal()).toBe(44);
    })

    it('Aplicar un descuento al total de la compra', () => {
        const carritoMio = new carritoCompra
        carritoMio.agregarProducto({nombre: 'jugo', precio: 20});
        carritoMio.agregarProducto({nombre: 'galletas', precio: 10});
        carritoMio.calcularTotal();
        expect(carritoMio.aplicarDescuento(10)).toBe(27);
    });

});
