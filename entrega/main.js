const productos =
[
  {nombre:"MANZANA", cantidad:15, precio:10},
  {nombre:"BANANA", cantidad:10, precio:15},
  {nombre:"CEBOLLA", cantidad:25, precio:6},
  {nombre:"ZANAHORIA", cantidad:15, precio:8},
  {nombre:"NARANJA", cantidad:45, precio:9},
  {nombre:"PERA", cantidad:12, precio:15},
  {nombre:"BONIATO", cantidad:18, precio:6},
  {nombre:"MORRON", cantidad:15, precio:30},
  {nombre:"MANDARINA", cantidad:25, precio:4},
  {nombre:"REPOLLO", cantidad:15, precio:6},
  {nombre:"PAPA", cantidad:15, precio:10},
  {nombre:"DURAZNO", cantidad:5, precio:20},
  {nombre:"TOMATE", cantidad:15, precio:10},
  {nombre:"UVA", cantidad:20, precio:7},
  {nombre:"SANDIA", cantidad:15, precio:10}
];

const productoDisponible = productos.map(prod => prod.nombre);

const clientes = ["Alvaro","Ana","Ismael","Johanna","Ada","Santino","Monica","Richard"];

const ventasTotales = [];

alert("VERDULERIA.")
let abierto = true;
while(abierto)
{
    const opcion = parseInt(prompt("1-Vender\n2-Agregar producto\n3-Mostrar productos\n4-Cerrar",0))

    if(Number.isNaN(opcion) || opcion < 1 || opcion > 4)
        alert("Error!. Intente nuevamente!")
    else
    operacion(opcion);
}

function operacion(opcion)
{
    switch(opcion)
    {
        case 1:ventas();
               break;
        case 2:agregarProducto();
               break;
        case 3:mostrarProducto();
               break;
        case 4:cerrarVerduleria();
               abierto = false;
               break;
        default:alert("ERROR");
                break;
    }    
}
//Ventas
function ventas()
{
    const cliente = clientes.shift();
    let total = 0;
    let seguirComprando = true;
    while(seguirComprando)
    {
        let producto = prompt(`Buenos dias ${cliente}, ¿que te gustaria llevar?\nTotal :$${total}`, "0").toUpperCase();
        if(producto == "0")
            {
                seguirComprando = false;
                break;
            }
        
        if(productoDisponible.includes(producto.toUpperCase()))
        {
            let objProducto = productos.find(prod => prod.nombre === producto);
            total += compra(objProducto);
        }
        else
        alert("No tenemos " + producto)
                
    }
    ventasTotales.push({cliente:cliente,pago:total})   
}
function compra(productoObj)
{
    let cantidadPro = parseInt(prompt(`Cantidad de ${productoObj.nombre} que vas a llevar? stock disponible es : ${productoObj.cantidad}`),0);

    if(cantidadPro > productoObj.cantidad)
        cantidadPro = productoObj.cantidad;
    
    productoObj.cantidad = productoObj.cantidad - cantidadPro;
    if(!productoObj.cantidad)
    {
        let indice = productos.findIndex(elemento => elemento.nombre === productoObj.nombre);
        productos.splice(indice,1);
        productoDisponible.splice(indice,1);
    }
    return cantidadPro * productoObj.precio;
}
//Agregar
function agregarProducto()
{
    let productoAgregar = prompt("Producto para agregar : ").toUpperCase();
    let cantidadAgregar = parseInt(prompt("Cantidad : ",1));
    if(productoDisponible.includes(productoAgregar))
        {
            let objProducto = productos.find(prod => prod.nombre === productoAgregar);
            objProducto.cantidad += cantidadAgregar;                      
        }
        else
        {
            let productoPrecioAgregar = parseInt(prompt("Precio : ",1));
            productos.push({nombre : productoAgregar,cantidad : cantidadAgregar, precio: productoPrecioAgregar});
            productoDisponible.push(productoAgregar);            
        }        
}
//Mostrar
function mostrarProducto()
{
    let mostrarProducto = "";
    productos.forEach(function(productoMostrar){
        mostrarProducto += `nombre: ${productoMostrar.nombre} cantidad: ${productoMostrar.cantidad} precio: ${productoMostrar.precio}\n`;
    })
    alert(`Lista de productos disponibles:\n${mostrarProducto}`);
}
//Cerrar
function cerrarVerduleria()
{
    let historialCaja = "";
    let totalCaja = 0;
    ventasTotales.forEach(function(venta){
        historialCaja += `Cliente : ${venta.cliente} pago : $${venta.pago}\n`
        totalCaja += venta.pago;
    })
    alert(`Historial caja:\n${historialCaja}\n\nTotal : ${totalCaja}`);
}