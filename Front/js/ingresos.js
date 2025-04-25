// Elementos del DOM
const agregarBtn = document.getElementById('agregarBtn');
const movimientosPendientes = document.getElementById('movimientosPendientes');
const movimientosAgregados = document.getElementById('movimientosAgregados');

// Función para crear un movimiento nuevo
function crearMovimiento(fecha, monto, movimiento, turno) {
  const div = document.createElement('div');
  div.classList.add('movimiento-list');
  div.innerHTML = `
    <p>${fecha} - $${monto} - ${movimiento} - Turno: ${turno}</p>
    <button class="edit-btn">Editar/Ver</button>
  `;
  return div;
}

// Evento al hacer clic en "Agregar a la pila"
agregarBtn.addEventListener('click', () => {
  const fechaActual = new Date().toLocaleDateString();
  const movimiento = document.getElementById('movimiento').value;
  const monto = document.getElementById('monto').value;
  const turno = document.getElementById('turno').value;

  if (!monto || !movimiento || !turno) {
    alert('Por favor completa todos los campos');
    return;
  }

  const nuevoMovimiento = crearMovimiento(fechaActual, monto, movimiento, turno);
  movimientosPendientes.appendChild(nuevoMovimiento);

  // Opcional: limpiar campos
  document.getElementById('monto').value = '';
  document.getElementById('detalle').value = '';
});

// Datos de ejemplo en "Movimientos ya agregados"
const datosEjemplo = [
  { fecha: '01/05/2025', monto: 500, movimiento: 'Venta', turno: 'M' },
  { fecha: '02/05/2025', monto: 300, movimiento: 'Servicio', turno: 'T' }
];

datosEjemplo.forEach(data => {
  const ejemplo = crearMovimiento(data.fecha, data.monto, data.movimiento, data.turno);
  movimientosAgregados.appendChild(ejemplo);
});
