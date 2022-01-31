//FOR U OBJETOS
for (let indice = 0; indice < 3; indice++) {
    console.log(`El valor de indice es = ${indice}`)
}
/*Aqui primero se establece y se le la variante que es: let indice = 0
Después lo compara con la siguiente parte que dice si indice es <3, como si lo es entonces se ejecuta el codigo de la consola
Y vuelve a regresar a la ultima parte que dice ahora incrementa uno a la variable indice (eso es lo que indica el ++)
por lo tanto ahora la variable es igual a 1 y se vuelve a empezar la lectura, ahora con la variable = 1 
y asi hasta que la variable indice ya no sea <3, osea que cuando la variable = 3 como ya no es <3 el código deja de ejecutarse
*/
console.log ("Se termino el for, esto significa que ya está leyendo otra parte del código");
// esto es solo para indicar que termino un procewso y continua con la lectura de las instrucciones


for (let numero = 0; numero < 10; numero++) {
    if (numero === 2){ // cuando la variable numero sea = 2, entonces me imprimes en consola 2
        console.log("2");
        break; /* aqui se utiliza el break para que el codigo se deje de ejecutar, una vez que ya encontro lo indiciado en 
        el renglon anterior, que se le indico que buscara el 2
        */
    }
    console.log("otro codigo"); /*este código solo se agrego para verificar que se leyó el procedimiento completo, 
    sino solo podriamos pedir que nos imprimiera un 2*/
}

//ARREGLO
const arreglo = ["Diego", "Ale", "Juan", "Maria"];

console.log("arreglo", arreglo); //Aqui estoy pidiendo que me imprima el arreglo
console.log(arreglo [3]); //Aqui estoy pidiendo que en consola me muestre el indice 3 de la constante arreglo


//ITERACIÓN FOR, (esto significa que este pedazo de progrmación se va a repetir cuantas veces yo se lo indique)
for (let indice = 0; indice < arreglo.length; indice++){ 
    /* Aqui primero esto definiendo la variable que es indice y le stoy asignando un numero, que es el 0 para indicarle 
    que ahi debe comenzar porque asi inicia toda la nuemeracion de todos los arreglos.
    DEspués estoy haciendo una comparación donde si esa variable es menor que el numero de elementos del arreglo (length)
    entonces se ejecute el codigo de abajo que es console.log(`El nombre...`)
    Una vez ejecutado vuelve a regresar a la ultima parte de la función que dice que a ese numero de variable se le sume 1, 
    eso se indica con el ++, tambien se podría restar y sería -- 
    Entonces el código se vuelve a ejecutar porque ahora la variable vale 1, después va a valer 2 y asi sucesivamente, 
    pero se va a detener cuando sea menor que 3, porque es la condicionante (arreglo.length)
    */
    console.log(`El nombre de la persona es ${arreglo [indice]}`);
}   /* Este ultimo pedazo de códifo es el que se imprime en consola con el resultado y se repetira cuatro veces con 
cada elemento del arreglo a menos que indiquemos un número de indice, en cuyo caso se imprimirá el número del indice.
*/


//ARREGLO Y EL MÉTODO `FOR EACH` (POR CADA)
//Se podría decir que el mismo proceso que con for
arreglo.forEach ((nombre) => 
/* For each es un método de arreglo, los arreglos tienen mas métodos, pero por el momento solo estamos ocupando este
después se establece la variante nombre y el => si son parte del código porque sino no se ejecuta
*/

console.log(`El nombre de la persona es ${nombre}`)
);
/* Luego pido en consola que se imprima "el nombre de la variante es + la variable nombre" 
y se va a imprimir cuatro veces
El nombre de la personas es Diego
El nombre de la personas es Ale
El nombre de la personas es Juan
El nombre de la personas es Maria
*/


//WHILE: OTRA FORMA DE HACER ITERACIONES (osea que el código se ejecute en bucle)
let contador = 10;

while (contador < 1000) {
console.log(contador);

contador = contador + 1;
}
