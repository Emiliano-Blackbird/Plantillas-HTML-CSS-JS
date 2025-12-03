const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.querySelector("#lista-usuarios");  // elemento UL donde se mostrarán los usuarios

fetch(urlUsuarios)  // petición a la URL
    .then( (response) => response.json() )  // convertir la respuesta a JSON
    .then( (data) => {
        console.log(data);  // mostrar los datos en consola para verificar que se recibieron correctamente
        data.forEach(usuario => {
            const li = document.createElement("li");  // crear un elemento LI por cada usuario
            li.textContent = usuario.name + " - Mail: " + usuario.email;
            listaUsuarios.append(li);
        })
    } )