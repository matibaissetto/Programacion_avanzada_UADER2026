/*1. Función Suma:
○ Crea una función llamada sumar que tome dos números como parámetros y devuelva su suma.
Prueba la función con diferentes números.*/

function sumar(a, b) {
    return a + b;
}

console.log("--- Ejercicio 1 ---\n");
console.log(sumar(5, 3));
console.log(sumar(10, -2));
console.log(sumar(0, 0));

console.log("\n")

/*2. Función que Multiplica:
○ Crea una función llamada multiplicar que tome dos números como parámetros y devuelva su producto.
Prueba la función con diferentes valores.*/

function multiplicar(a, b) {
    return a * b;
}

console.log("--- Ejercicio 2 ---\n");
console.log(multiplicar(4, 5));
console.log(multiplicar(7, 3));
console.log(multiplicar(-2, 8));

console.log("\n")

/*3. Función con Parámetro por Defecto:
○ Crea una función llamada saludar que tome un parámetro nombre con un valor por defecto de "Invitado".
La función debe devolver "Hola, [nombre]".*/

function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}

console.log("--- Ejercicio 3 ---\n");
console.log(saludar("María"));
console.log(saludar());
console.log(saludar("Carlos"));

console.log("\n")

/*4. Función que Devuelve un Objeto:
○ Crea una función llamada crearPersona que tome nombre y edad como parámetros y devuelva un objeto con esas propiedades.*/

function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

console.log("--- Ejercicio 4 ---\n");
console.log(crearPersona("Ana", 30));
console.log(crearPersona("Luis", 25));

console.log("\n")

/*5. Función que Modifica un Objeto:
○ Crea una función llamada actualizarEdad que tome un objeto persona y un número nuevaEdad,
y actualice la propiedad edad del objeto.*/

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

console.log("--- Ejercicio 5 ---\n");
const persona = { nombre: "Pedro", edad: 20 };
console.log("Antes de actualizar:");
console.log(persona);
actualizarEdad(persona, 35);
console.log("Después de actualizar:");
console.log(persona);

console.log("\n")

/*6. Función Recursiva:
○ Crea una función recursiva llamada factorial que calcule el factorial de un número dado.*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("--- Ejercicio 6 ---\n");
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));

console.log("\n")

/*7. Función con Función Interna:
○ Crea una función llamada despedir que contenga una función interna adios.
despedir debe devolver el resultado de llamar a adios.*/

function despedir() {
    function adios() {
        return "¡Adiós, nos vemos!";
    }
    return adios();
}

console.log("--- Ejercicio 7 ---\n");
console.log(despedir());

console.log("\n")

/*8. Función que Usa Otra Función:
○ Crea una función llamada procesarArray que tome un array y una función como parámetros,
y aplique la función a cada elemento del array.
Usa una función como parámetro para multiplicar cada número por 2.*/

function procesarArray(array, funcion) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcion(array[i]));
    }
    return resultado;
}

function multiplicarPor2(numero) {
    return numero * 2;
}

console.log("--- Ejercicio 8 ---\n");
const numeros = [1, 2, 3, 4, 5];
console.log("Array original:");
console.log(numeros);
console.log("Array multiplicado por 2:");
console.log(procesarArray(numeros, multiplicarPor2));

console.log("\n")

/*9. Función que Devuelve Otra Función:
○ Crea una función llamada crearMultiplicador que tome un número x y devuelva una nueva función
que multiplique cualquier número por x.*/

function crearMultiplicador(x) {
    return function(y) {
        return x * y;
    };
}

console.log("--- Ejercicio 9 ---\n");
const duplicar = crearMultiplicador(2);
console.log(duplicar(5));
const triplicar = crearMultiplicador(3);
console.log(triplicar(4));

console.log("\n")

/*10. Función Anónima:
○ Crea una función anónima que sume dos números y la asigna a una variable llamada sumarAnonima.
Luego, invoca la función a través de esa variable.*/

const sumarAnonima = function(a, b) {
    return a + b;
};

console.log("--- Ejercicio 10 ---\n");
console.log(sumarAnonima(10, 20));
console.log(sumarAnonima(7, 3));