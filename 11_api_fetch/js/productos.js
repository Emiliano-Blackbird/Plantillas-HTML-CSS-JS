const listaProductos = document.querySelector("#lista-productos");

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Mostrar los datos completos en la consola
        mostrarProductos(data);
    })

function mostrarProductos(productos) {
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerText = producto.nombre + " - $" + producto.precio;
        listaProductos.append(li);
    });
}