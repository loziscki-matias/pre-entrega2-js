//Aquí declaramos el array de productos y el carrito.

const productos = [
    {nombre: "Vinilo", precio: 141500},
    {nombre: "Classic", precio: 145000},
    {nombre: "Alley", precio: 164500},
    {nombre: "Alfa", precio: 166800},
    {nombre: "Bullmoose", precio: 170000},

];
let carrito = []

//En nuestro local prima la cortesia, preguntando el nombre a todos nuestros clientes para darles la Bienvenida.
//función donde tipeamos un nombre para proseguir, evita dato null.

const buenNombre = () => {
    let nombre = prompt("Buen día. ¿Cúal es su nombre?")
    if (nombre != null) {
        return nombre;
    } else {
        return buenNombre()
    }
}
let nombre = buenNombre()

let comprar = confirm(`Bienvenido a Fixy Style Bikes estiamd@ ${nombre}.\n¿Deseas realizar una compra?`);

//Se indaga y se reeconfirma (salir del bucle) a nuestro cliente si desea adquirir algún producto.

while (comprar != "si" && comprar != "no") {
    alert("Ingrese por favor, si o no.")
    comprar = prompt("Hola, ¿desea realizar una compra, si o no?")
}

//Con respuesta afirmativa se muestra listado de productos y en caso contrario, despedimos al cliente.

if (comprar == "si") {
    alert("Nuestra lista de productos: ")
    let listaProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(listaProductos.join(" - "))
} else if (comprar == "no") {
    alert("Gracias por visitarnos, hasta pronto!!")
} 

//Se genera bucle para la elección de productos que quiera comprar el cliente.

while(comprar != "no"){
    let producto = prompt ("Elija y ageregue un producto a su carrito")
    let precio = 0

    if(producto == "Vinilo" ||producto == "Classic" ||
    producto == "Alley" ||producto == "Alfa" ||
    producto == "Bullmoose"){
        switch(producto){
            case "Vinilo":
                precio = 141500;
                break;
            case "Classic":
                precio = 145000;
                break;
            case "Alley":
                precio = 164500;
                break;
            case "Alfa":
                precio = 166800;
                break;
            case "Bullmoose":
                precio = 170000;
                break;
                default:
                    break;
        }

//Le indicaremos al cliente a continuación, la cantidad de unidades que desea comprar.

    let unidades = parseInt(prompt("Cuantas unidades desea comprar?"))

//Creamos el carrito, donde quedarán alojados los datos del producto con su precio y la cantidad que desea llevar.

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No contamos con ese producto")
    }

    seleccion = prompt("Desea seguir comprando?");

// Seguidamente le preguntamos si desea seguir comprando productos, caso contrario, agradecemos su compra mostrándo en el momento el carrito finalizado.

    if (seleccion !== "no") {
        alert("Disfrute su compra. Gracias por elegirnos!!");
        carrito.forEach((finalCarrito) => {
            console.log (`producto: ${finalCarrito.producto}, unidades: ${finalCarrito.unidades},
             total a pagar por producto ${finalCarrito.producto * finalCarrito.unidades}`)
        });
    }
    break;
}

//Generamos el valor final a abonar por la compra.

const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`) 