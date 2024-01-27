//JS. ARCHIVO ARNDT SABRINA


alert("SITIO DE COMPRAS");
var result= confirm("¿Desea continuar?");
console.log(result); 



//objetos
const carrito = [
    { nombre: "celular samsung a10",  precio:  300   , disponible: true   },
    { nombre: "celular samsung a11",  precio:  350   , disponible: true   },
    { nombre: "celular samsung a12",  precio:  400   , disponible: true   },
    { nombre: "celular iphone 8plus", precio:  600   , disponible: true   },
    { nombre: "celular iphone 11",    precio:  1000  , disponible: true   },
    { nombre: "celular iphone 12",    precio:  2000  , disponible: true   },
    { nombre: "laptop HP",            precio: 1200   , disponible: true   },
    { nombre: "laptop DELL",          precio: 2000   , disponible: true   },
    { nombre: "auriculares inalámbricos", precio: 50 , disponible: true   },
];


console.table(carrito)


function buscar(producto_carrito) {
    for (const producto of carrito) {
        if (producto.nombre === producto_carrito) {
            const compra = confirm(`¿Desea comprar producto "${producto_carrito}" Precio: $${producto.precio}?`)

            if (compra) {
                const montoAPagar = prompt(`Ingrese el monto a pagar por ${producto_carrito}:`)
                const montoAPagarNumero = parseFloat(montoAPagar);

                if (isNaN(montoAPagarNumero) || montoAPagarNumero < producto.precio) {
                    console.log("Monto inválido o insuficiente. Operacion cancelada.")
                    return null;
                }

                const cambio = montoAPagarNumero - producto.precio;

                const cliente = {
                    nombre: prompt("ingrese su nombre:"),
                    apellido: prompt("ingrese su apellido"),
                    total: producto.precio,
                    pagado: true,
                    informacion: function () {
                        console.log(`Cliente ${this.nombre} ${this.apellido}`);
                        console.log(`Compra: ${producto.nombre}`);
                        console.log(`Precio unitario: $${producto.precio}`);
                        console.log(`Pagó: $${montoAPagarNumero}`); 
                        console.log(`Cambio a devolver: $${cambio}`);
                    }
                };

                return cliente;
            } else {
                console.log("Operacion cancelada por el usuario.")
                return null;
            }
        }
    }
    console.log("Producto no encontrado en el carrito.")
    return null;
}

const producto = prompt("Producto a buscar: (ingrese *celular, laptop o auriculares* seguido del nombre del producto)")
const cliente = buscar(producto)

if (cliente) {
    cliente.informacion()
}


//agregar mas productos
function modificar(){
// agregar elementos nuevos al principio con unshift
carrito.unshift({ nombre: "celular samsung a50", precio: 300 })
}
modificar();



//array con los tdos los nombres de los productos
const nombresProductos = carrito.map(producto => producto.nombre);

console.log(nombresProductos);






