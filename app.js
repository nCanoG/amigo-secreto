//variables
let amigos =[]

//funciones
function agregarAmigo() {
    let listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = '';
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value;
    if (nombre.trim() === ''){
        alert ('Favor ingresar un nombre válido');
        return;
    }
    amigos.push(nombre);
    actualizarListaAmigos ();
    inputNombre.value = '';
    }

function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaHTML.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('¡Debes agregar al menos dos amigo para sortear!');
        return; 
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceAleatorio];
    let listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = `<li>¡El amigo secreto es: ${ganador}!</li>`;
    amigos = [];
    actualizarListaAmigos();
}

