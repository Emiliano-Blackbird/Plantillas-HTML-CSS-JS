// Declaramos las tres promesas-corredores
const corredor1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Corredor 1 ha terminado");
});

const corredor2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Corredor 2 se ha retirado");
});

const corredor3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Corredor 3 ha terminado");
});

// Promise.race: devuelve la primera promesa que termina, resuelta o rechazada
Promise.race([corredor1, corredor2, corredor3])
    .then(ganador => console.log("Race:", ganador))
    .catch(error => console.error("Race error:", error));

// Promise.any: devuelve la primera promesa resuelta (ignora rechazos)
Promise.any([corredor1, corredor2, corredor3])
    .then(ganador => console.log("Any:", ganador))
    .catch(error => console.error("Any error:", error));

// Promise.allSettled: devuelve el estado de todas las promesas
Promise.allSettled([corredor1, corredor2, corredor3])
    .then(resultados => {
        console.log("AllSettled:", resultados);
    });
