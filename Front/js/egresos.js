const agregarBtn = document.getElementById('agregarBtn');
const movimientosPendientes = document.getElementById('movimientosPendientes');
const movimientosAgregados = document.getElementById('movimientosAgregados');

function crearMovimiento(fecha, monto, movimiento, turno) {
  const div = document.createElement('div');
  div.classList.add('movimiento-list');
  div.innerHTML = `
    <p>${fecha} - $${monto} - ${movimiento} - Turno: ${turno}</p>
    <button class="edit-btn">Editar/Ver</button>
  `;
  return div;
}

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

  document.getElementById('monto').value = '';
  document.getElementById('detalle').value = '';
});

const datosEjemplo = [
  { fecha: '01/05/2025', monto: 200, movimiento: 'Compra', turno: 'M' },
  { fecha: '02/05/2025', monto: 150, movimiento: 'Servicio', turno: 'T' }
];

datosEjemplo.forEach(data => {
  const ejemplo = crearMovimiento(data.fecha, data.monto, data.movimiento, data.turno);
  movimientosAgregados.appendChild(ejemplo);
});
