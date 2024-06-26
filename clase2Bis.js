// Tenemos varias funciones a disposicion en nuestro programa.
// Debemos reutilizarlas y acomodar nuestro juego para que el mismo sea al mejor de 3 partidas.
// Esto significa que el primero que gane 2 partidas va ser el ganador. Con lo cual pueden repetirse varias rondas hasta que esto suceda.

// Listemos las funciones para recordarlo mejor
// FUNCION 1: iniciarJuego()
// -> Es la que se encarga de recopilar el nombre del jugador y saludarlo.
// FUNCION 2: pedirJugada()
// -> Esta se encarga de pedirle una eleccion al usuario hasta que ingrese un número válido.
// FUNCION 3: jugadaRandom()
// -> Utiliza el objeto Math para generar un numero aleatorio entre 1 y 3
// FUNCION 4: compararJugadas()
// -> Se encarga de comparar ambas elecciones y definir cómo le fue al usuario

/* ------------------------------ 👇Comenzamos ------------------------------ */
// Primero debemos limpiar los scripts anteriores y dejar solo las funciones, quitamos las variables y las empezamos a declarar solo en este script

let marcador  = {
    usuario: 0,
    computadora: 0,
    empates:0,
    rondas:0
}

const nombreDelJugador = iniciarJuego()

// Mientras ninguno de los jugadores haya sumado 2 puntos, seguiremos jugando
while (marcador.usuario < 2 && marcador.computadora < 2) {
    const RESULTADO_PARTIDA = compararJugadas()
    alert(RESULTADO_PARTIDA)
    console.log(RESULTADO_PARTIDA);
    
    if (RESULTADO_PARTIDA.includes("ganaste")) {
        marcador.usuario++
        marcador.rondas++
    } else if (RESULTADO_PARTIDA.includes("perdiste")) {
        marcador.computadora++
        marcador.rondas++
    } else {
        marcador.empates++
        marcador.rondas++
    }
    console.log(marcador);
    alert(`Resultado de la Ronda: \nScore del Usuario: ${marcador.usuario}\nScore del Computador: ${marcador.computadora}`);
}

alert(`Cantidad de Rondas jugadas: ${marcador.rondas}\nResultados: \nGanaste: ${marcador.usuario} ronda/s\nPerdiste: ${marcador.computadora} ronda/s\nEmpataste: ${marcador.empates} ronda/s`);


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.