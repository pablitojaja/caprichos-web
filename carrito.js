VANTA.WAVES({
  el: "#fondo",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xfac6df,
  shininess: 50.00,
  waveHeight: 15.00,
  waveSpeed: 0.5,
  zoom: 0.8
});

let carrito = [];
window.onload = () => {
  const g = localStorage.getItem('carrito');
  if (g) { carrito = JSON.parse(g); actualizarCarrito(); }
};

function guardarCarrito() { localStorage.setItem('carrito', JSON.stringify(carrito)); }

function agregarAlCarrito(n, p) {
  carrito.push({ nombre: n, precio: p });
  guardarCarrito(); actualizarCarrito();
}

function eliminarDelCarrito(i) {
  carrito.splice(i, 1);
  guardarCarrito(); actualizarCarrito();
}

function actualizarCarrito() {
  const lis = document.getElementById('lista-carrito'),
        tot = document.getElementById('carrito-total'),
        cnt = document.getElementById('carrito-contador');
  lis.innerHTML = '';
  let s = 0;
  carrito.forEach((it, ix) => {
    s += it.precio;
    lis.innerHTML += `<li>${it.nombre} – $${it.precio}
      <button style="float:right;background:red;color:white;border:none;border-radius:5px;padding:2px 6px;cursor:pointer;" onclick="eliminarDelCarrito(${ix})">❌</button>
    </li>`;
  });
  tot.innerText = `Total: $${s}`; cnt.innerText = carrito.length;
}

function finalizarCompra() {
  if (!carrito.length) return alert("Tu carrito está vacío.");
  window.open("https://link.mercadopago.com.ar/caprichosregalos", "_blank");
}

document.getElementById('carrito-toggle')
  .addEventListener('click', () => {
    const box = document.getElementById('carrito');
    box.style.display = (box.style.display === 'none') ? 'block' : 'none';
  });
