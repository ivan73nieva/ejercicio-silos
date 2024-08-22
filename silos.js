let siloSoja = { capacidadMaxima: 2000, stockActual: 0 };
let siloMaiz = { capacidadMaxima: 500, stockActual: 0 };


function ingresarCamion() {
    let Cereal = prompt("tipo de cereal? (soja o maíz):").toLowerCase();
    let pesoCarga = parseFloat(prompt("Ingresar el peso de la carga:"));

    if (Cereal === "soja" || Cereal === "maiz") {
        let silo = Cereal === "soja" ? siloSoja : siloMaiz;

        if (pesoCarga > 0 && silo.stockActual + pesoCarga <= silo.capacidadMaxima) {
            silo.stockActual += pesoCarga;
            alert(`Ingreso exitoso. Stock actual de ${Cereal}: ${silo.stockActual} toneladas.`);
        } else {
            alert(`No hay suficiente espacio en el silo de ${Cereal}.`);
        }
    } else {
        alert("Tipo de cereal ingresado no es válido.");
    }
}


ingresarCamion();