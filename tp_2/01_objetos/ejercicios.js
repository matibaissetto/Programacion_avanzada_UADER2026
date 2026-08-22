/*1. Creación de un Objeto Básico:
○ Crea un objeto llamado libro con propiedades como título, autor y
añoDePublicacion. Imprime cada propiedad en la consola.*/

const libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    _añoDePublicacion: 1967,
    /*3. Métodos en Objetos:
    ○ Añade un método llamado descripción al objeto libro que devuelva
    una cadena describiendo el título y el autor del libro. Invoca este
    método e imprime el resultado.*/

    descripcion() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
    },

    
    /*10. Métodos Getters y Setters:
    ○ Añade un getter y un setter al objeto libro para la propiedad
    añoDePublicacion. Usa el setter para actualizar el año de publicación
    y luego usa el getter para leerlo.*/

    get añoDePublicacion(){
        return this._añoDePublicacion;
    },

    set añoDePublicacion(nuevoAño) {
        this._añoDePublicacion = nuevoAño;
    }
    
};

console.log("--- Ejercicio 1 ---\n");
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.añoDePublicacion);

console.log("--- Ejercicio 3 ---\n");
console.log(libro.descripcion());
console.log("\n")

/*2. Anidación de Objetos:
○ Crea un objeto llamado estudiante con propiedades nombre, edad y
direccion. direccion debe ser otro objeto con propiedades calle,
ciudad y pais. Imprime la dirección completa del estudiante.*/

const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Buenos Aires",
        pais: "Argentina"
    }
    };

console.log("--- Ejercicio 2 ---\n");
console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.direccion.calle);
console.log(estudiante.direccion.ciudad);
console.log(estudiante.direccion.pais);

console.log("\n")


/*4. Iteración sobre Propiedades de un Objeto:
○ Crea un objeto producto con propiedades como nombre, precio y
disponible. Usa un bucle for...in para imprimir todas las propiedades
y sus valores.*/

const producto = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};

console.log("--- Ejercicio 4 ---\n");
for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

/*5. Actualización de Propiedades:
○ Modifica el valor de la propiedad precio del objeto producto y luego
imprime el objeto completo para verificar el cambio.*/

producto.precio = 1500;
console.log("\n--- Ejercicio 5 ---\n");
console.log(producto);

/*6. Comprobación de Propiedades:
○ Crea una función llamada tienePropiedad que tome un objeto y una
cadena como parámetros, y devuelva true si el objeto tiene una
propiedad con ese nombre, o false en caso contrario.*/

function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
}

console.log("\n--- Ejercicio 6 ---\n");
console.log(tienePropiedad(producto, "nombre")); // true
console.log(tienePropiedad(producto, "descripcion")); // false

/*7. Eliminación de Propiedades:
○ Elimina la propiedad disponible del objeto producto. Imprime el
objeto antes y después de eliminar la propiedad.*/

console.log("\n--- Ejercicio 7 ---\n");
console.log("Antes de eliminar la propiedad 'disponible':");
console.log(producto);

delete producto.disponible;
console.log("Después de eliminar la propiedad 'disponible':");
console.log(producto);

/*8. Combinar Objetos:
○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
en un nuevo objeto. Imprime el resultado.*/

const persona1 = {
    nombre: "Ana",
    edad: 25
};  

const persona2 = {
    apellido: "Gómez",
    ciudad: "Madrid"
};  

const personaCombinada = Object.assign({}, persona1, persona2);
console.log("\n--- Ejercicio 8 ---\n");
console.log(personaCombinada);  

/*9. Copiar Objetos:
○ Crea una copia profunda del objeto estudiante utilizando el método
JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
original no haya sido alterado.*/

const estudianteCopia = JSON.parse(JSON.stringify(estudiante));
estudianteCopia.nombre = "Carlos López";
estudianteCopia.edad = 93;
estudianteCopia.direccion.calle = "Avenida Siempre Viva 742";
estudianteCopia.direccion.ciudad = "Springfield";
estudianteCopia.direccion.pais = "USA";

console.log("\n--- Ejercicio 9 ---\n"); 
console.log("Original:");
console.log(estudiante);
console.log("Copia:");
console.log(estudianteCopia);

console.log("\n--- Ejercicio 10 ---\n");
libro._añoDePublicacion = 1970;
console.log("El año modificado del libro es: " + libro._añoDePublicacion);

