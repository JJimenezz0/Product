// Obtiene el carrito guardado o inicia uno vacío si no existe
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  // Guarda el carrito actualizado en la memoria del navegador
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(nombre + " agregado con éxito.");
}

function actualizarInterfazCarrito() {
  let lista = document.getElementById("lista-carrito");
  let total = 0;
  
  if (!lista) return; // Evita errores si la función se llama en la página equivocada
  lista.innerHTML = "";
  
  carrito.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;
    lista.appendChild(li);
    total += item.precio;
  });
  
  document.getElementById("total").textContent = total;
}
