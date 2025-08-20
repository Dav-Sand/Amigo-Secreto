let nombres = []; // Esto es un array vacío

// Función para agregar un amigo
function agregarAmigo() 
{
	const input = document.getElementById('amigo');
	const nombre = input.value.trim();
	if (nombre === "")
        {
        alert("Por favor ingresa un nombre.");
        return;
        }
	if (nombres.includes(nombre)) 
        {
		alert("Nombre repetido. Por favor ingresa uno diferente.");
		return;
	    }
	nombres.push(nombre);
	mostrarNombres();
	input.value = "";
}

// Función para mostrar los nombres en la lista
function mostrarNombres() 
{
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = "";
	nombres.forEach((nombre, index) => {
		const li = document.createElement('li');
		li.textContent = nombre;

		// Botón para eliminar
		const btnEliminar = document.createElement('button');
		btnEliminar.textContent = ' ❌';
		btnEliminar.className = 'button-delete';
		btnEliminar.onclick = () => eliminarAmigo(index);
		li.appendChild(btnEliminar);
		lista.appendChild(li);// Añade el elemento li a la lista(Sin el no se genera la lista visualmente)
	});
}

// Función para eliminar un amigo
function eliminarAmigo(index) 
    {
	nombres.splice(index, 1);
	mostrarNombres();
    }

// Función para mostrar un nombre aleatorio
function SortearAmigo() 
{
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    if (nombres.length === 0) 
        {
        resultado.innerHTML = '<li>No hay nombres suficientes para sortear.</li>';
        return;
        }
    const indice = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indice];
    resultado.innerHTML = `<li>Tu amigo secreto es: 🎉<strong>${nombreSorteado}</strong>🎉</li>`;
	const img = document.createElement("img");
    img.src = "assets/RegalosAnimados.gif";
    img.alt = "Regalo animado";
    img.style.marginTop = "10px";
    img.style.width = "200px";
    resultado.appendChild(img);
}

