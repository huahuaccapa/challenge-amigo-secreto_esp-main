let amigos = [];

// Agregar amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("El nombre está vacío o ya ha sido agregado.");
    }
}

// Actualizar lista en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para sortear.");
        return;
    }

    let amigosSorteo = [...amigos];
    let resultado = {};

    for (let amigo of amigos) {
        let posibles = amigosSorteo.filter(a => a !== amigo);
        if (posibles.length === 0) {
            return alert("No se puede hacer el sorteo, intenta nuevamente.");
        }
        
        let seleccionado = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigo] = seleccionado;
        amigosSorteo = amigosSorteo.filter(a => a !== seleccionado);
    }

    mostrarResultado(resultado);
}

// Mostrar resultado en pantalla
function mostrarResultado(resultado) {
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";

    for (let [amigo, secreto] of Object.entries(resultado)) {
        let li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        lista.appendChild(li);
    }
}
