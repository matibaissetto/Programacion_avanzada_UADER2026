/*1. Consumo de Datos desde una API:
○ Crea una función llamada obtenerUsuarios que haga una petición HTTP a la API https://jsonplaceholder.typicode.com/users usando fetch. Luego, imprime en la consola la lista de usuarios obtenida.*/

async function obtenerUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    console.log(usuarios);
}

console.log("--- Ejercicio 1 ---\n");
obtenerUsuarios();

console.log("\n")

/*2. Procesamiento de Datos de una API:
○ Usando la función obtenerUsuarios, crea otra función llamada imprimirNombresDeUsuarios que filtre y muestre solo los nombres de los usuarios.*/

async function imprimirNombresDeUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    const nombres = usuarios.map(usuario => usuario.name);
    console.log(nombres);
}

console.log("--- Ejercicio 2 ---\n");
imprimirNombresDeUsuarios();

console.log("\n")

/*3. Autenticación Simulada:
○ Crea una función llamada autenticarUsuario que tome un objeto credenciales con usuario y contraseña, y verifique si coinciden con un usuario predefinido. La función debe devolver true si la autenticación es exitosa y false en caso contrario.*/

function autenticarUsuario(credenciales) {
    const usuarioPredefinido = {
        usuario: "admin",
        password: "1234"
    };
    return credenciales.usuario === usuarioPredefinido.usuario && credenciales.password === usuarioPredefinido.password;
}

console.log("--- Ejercicio 3 ---\n");
console.log(autenticarUsuario({ usuario: "admin", password: "1234" }));
console.log(autenticarUsuario({ usuario: "user", password: "4321" }));

console.log("\n")

/*4. Transformación de Datos:
○ Crea una función llamada mapearUsuarios que tome un array de usuarios obtenidos de la API y devuelva un nuevo array con solo las propiedades nombre y email de cada usuario.*/

async function mapearUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    const mapeados = usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
    console.log(mapeados);
}

console.log("--- Ejercicio 4 ---\n");
mapearUsuarios();

console.log("\n")

/*5. Validación de Formularios:
○ Crea una función llamada validarFormulario que tome un objeto con los campos nombre, email y password. La función debe devolver true si todos los campos están presentes y no están vacíos, y false en caso contrario.*/

function validarFormulario(campos) {
    return campos.nombre && campos.email && campos.password;
}

console.log("--- Ejercicio 5 ---\n");
console.log(validarFormulario({ nombre: "Juan", email: "juan@mail.com", password: "1234" }));
console.log(validarFormulario({ nombre: "", email: "", password: "" }));
console.log(validarFormulario({ nombre: "Ana", email: "ana@mail.com" }));

console.log("\n")

/*6. Paginación de Datos:
○ Crea una función llamada obtenerPagina que tome un array de datos y un número de página. La función debe devolver los elementos correspondientes a esa página, asumiendo que cada página tiene 5 elementos.*/

function obtenerPagina(array, numeroPagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return array.slice(inicio, fin);
}

console.log("--- Ejercicio 6 ---\n");
const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Página 1:");
console.log(obtenerPagina(datos, 1));
console.log("Página 2:");
console.log(obtenerPagina(datos, 2));
console.log("Página 3:");
console.log(obtenerPagina(datos, 3));

console.log("\n")

/*7. Envío de Datos a una API:
○ Crea una función llamada enviarDatos que tome un objeto data y haga una petición POST a la API https://jsonplaceholder.typicode.com/posts. La función debe imprimir la respuesta de la API.*/

async function enviarDatos(data) {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resultado = await respuesta.json();
    console.log(resultado);
}

console.log("--- Ejercicio 7 ---\n");
enviarDatos({ titulo: "Mi primer post", cuerpo: "Contenido del post", userId: 1 });

console.log("\n")

/*8. Búsqueda de Usuarios:
○ Crea una función llamada buscarUsuarioPorEmail que tome un array de usuarios y un email como parámetros, y devuelva el usuario que coincida con el email proporcionado. Usa el método find para implementarlo.*/

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

console.log("--- Ejercicio 8 ---\n");
const listaUsuarios = [
    { nombre: "Juan", email: "juan@mail.com" },
    { nombre: "Ana", email: "ana@mail.com" },
    { nombre: "Carlos", email: "carlos@mail.com" }
];
console.log(buscarUsuarioPorEmail(listaUsuarios, "ana@mail.com"));
console.log(buscarUsuarioPorEmail(listaUsuarios, "pedro@mail.com"));

console.log("\n")

/*9. Generación de Token de Autenticación:
○ Crea una función llamada generarToken que tome un objeto usuario y devuelva un token JWT simulado como una cadena. Puedes usar una función como btoa (Base64) para simular la generación del token.*/

function generarToken(usuario) {
    const json = JSON.stringify(usuario);
    return btoa(json);
}

console.log("--- Ejercicio 9 ---\n");
const usuario = { id: 1, nombre: "María", email: "maria@mail.com" };
console.log(generarToken(usuario));

console.log("\n")

/*10. Actualización de Información del Usuario:
○ Crea una función llamada actualizarUsuario que tome un objeto usuario y una lista de cambios a aplicar. La función debe retornar el usuario con las propiedades actualizadas.*/

function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
}

console.log("--- Ejercicio 10 ---\n");
const usuarioOriginal = { id: 1, nombre: "Pedro", edad: 25, ciudad: "Buenos Aires" };
const cambios = { edad: 30, ciudad: "Córdoba" };
console.log("Usuario original:");
console.log(usuarioOriginal);
console.log("Usuario actualizado:");
console.log(actualizarUsuario(usuarioOriginal, cambios));