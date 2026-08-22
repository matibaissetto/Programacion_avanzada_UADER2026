/*1. Agregar y Eliminar Elementos:
○ Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa push para agregar una fruta al final, y pop para eliminar la última fruta.*/

const frutas = ["manzana", "banana", "pera"];

console.log("--- Ejercicio 1 ---\n");
console.log("Array original:");
console.log(frutas);

frutas.push("naranja");
console.log("Después de push('naranja'):");
console.log(frutas);

frutas.pop();
console.log("Después de pop():");
console.log(frutas);

console.log("\n")

/*2. Array Bidimensional:
○ Crea un array bidimensional llamado matriz con los valores [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola.*/

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log("--- Ejercicio 2 ---\n");
console.log("Elemento en la posición [1][1] (el número 5):");
console.log(matriz[1][1]);

console.log("\n")

/*3. Iterar sobre un Array:
○ Usa un bucle for para iterar sobre el array frutas e imprimir cada elemento.*/

console.log("--- Ejercicio 3 ---\n");
console.log("Iterando sobre frutas con for:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("\n")

/*4. Uso de map:
○ Crea una función llamada elevarAlCuadrado que tome un array de números y devuelva un nuevo array con cada número elevado al cuadrado. Usa map para implementar la función.*/

function elevarAlCuadrado(numeros) {
    return numeros.map(numero => numero * numero);
}

console.log("--- Ejercicio 4 ---\n");
const numeros = [1, 2, 3, 4, 5];
console.log("Array original:");
console.log(numeros);
console.log("Array elevado al cuadrado:");
console.log(elevarAlCuadrado(numeros));

console.log("\n")

/*5. Uso de filter:
○ Crea una función llamada filtrarMayoresDe que tome un array de números y un valor de referencia, y devuelva un nuevo array solo con los números mayores que ese valor. Usa filter.*/

function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(numero => numero > referencia);
}

console.log("--- Ejercicio 5 ---\n");
const numeros2 = [5, 12, 8, 3, 20, 7];
console.log("Array original:");
console.log(numeros2);
console.log("Números mayores que 8:");
console.log(filtrarMayoresDe(numeros2, 8));
console.log("Números mayores que 10:");
console.log(filtrarMayoresDe(numeros2, 10));

console.log("\n")

/*6. Uso de reduce:
○ Crea una función llamada sumarElementos que tome un array de números y devuelva la suma de todos los elementos del array usando reduce.*/

function sumarElementos(numeros) {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

console.log("--- Ejercicio 6 ---\n");
const numeros3 = [1, 2, 3, 4, 5];
console.log("Array:");
console.log(numeros3);
console.log("Suma de todos los elementos:");
console.log(sumarElementos(numeros3));

console.log("\n")

/*7. Uso de some:
○ Crea un array de números llamado numeros y usa some para verificar si algún número es mayor que 10.*/

console.log("--- Ejercicio 7 ---\n");
const numeros4 = [3, 7, 2, 9, 5];
console.log("Array:");
console.log(numeros4);
console.log("¿Algún número es mayor que 10?");
console.log(numeros4.some(numero => numero > 10));

console.log("\n")

/*8. Uso de every:
○ Crea un array de números llamado numeros y usa every para verificar si todos los números son positivos.*/

console.log("--- Ejercicio 8 ---\n");
const numeros5 = [3, 7, 2, 9, 5];
console.log("Array:");
console.log(numeros5);
console.log("¿Todos los números son positivos?");
console.log(numeros5.every(numero => numero > 0));

console.log("\n")

/*9. Uso de find:
○ Crea un array de objetos llamados personas donde cada objeto tenga nombre y edad. Usa find para encontrar a la primera persona mayor de 30 años.*/

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 32 },
    { nombre: "María", edad: 28 },
    { nombre: "Luis", edad: 40 }
];

console.log("--- Ejercicio 9 ---\n");
console.log("Array de personas:");
console.log(personas);
console.log("Primera persona mayor de 30 años:");
console.log(personas.find(persona => persona.edad > 30));

console.log("\n")

/*10. Uso de sort:
○ Crea un array de palabras y ordénalo alfabéticamente usando sort.*/

console.log("--- Ejercicio 10 ---\n");
const palabras = ["manzana", "banana", "pera", "naranja", "uva"];
console.log("Array original:");
console.log(palabras);
console.log("Array ordenado alfabéticamente:");
console.log(palabras.sort());