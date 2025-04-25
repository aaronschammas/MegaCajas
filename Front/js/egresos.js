const agregarBtn = document.getElementById('agregarBtn');
const movimientosPendientes = document.getElementById('movimientosPendientes');
const movimientosAgregados = document.getElementById('movimientosAgregados');

function crearMovimiento(fecha, monto, movimiento, turno, realizadoPor) {
  const div = document.createElement('div');
  div.classList.add('movimiento-list');

  div.innerHTML = `
    <p><strong>${fecha}</strong> - $${monto} - ${movimiento} - Turno: ${turno} - Por: ${realizadoPor}</p>
    <div class="action-buttons">
      <button class="edit-btn">Editar/Ver</button>
      <button class="delete-btn" title="Eliminar">×</button>
    </div>
  `;

  // Solo para pila pendiente (donde se permite eliminar)
  const deleteBtn = div.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    div.remove();
  });

  return div;
}

agregarBtn.addEventListener('click', () => {
  const fechaActual = new Date().toLocaleDateString();
  const movimiento = document.getElementById('movimiento').value;
  const monto = document.getElementById('monto').value;
  const turno = document.getElementById('turno').value;
  const realizadoPor = document.getElementById('realizadoPor').value;

  if (!monto || !movimiento || !turno || !realizadoPor) {
    alert('Por favor completa todos los campos');
    return;
  }

  const nuevoMovimiento = crearMovimiento(fechaActual, monto, movimiento, turno, realizadoPor);
  movimientosPendientes.appendChild(nuevoMovimiento);

  document.getElementById('monto').value = '';
  document.getElementById('detalle').value = '';
});

// Datos de ejemplo ya agregados (sin eliminar)
const datosEjemplo = [
  { fecha: '01/05/2025', monto: 200, movimiento: 'Compra', turno: 'M', realizadoPor: 'Admin' },
  { fecha: '02/05/2025', monto: 150, movimiento: 'Servicio', turno: 'T', realizadoPor: 'Cajero 1' }
];

datosEjemplo.forEach(data => {
  const div = document.createElement('div');
  div.classList.add('movimiento-list');
  div.innerHTML = `
    <p><strong>${data.fecha}</strong> - $${data.monto} - ${data.movimiento} - Turno: ${data.turno} - Por: ${data.realizadoPor}</p>
    <div class="action-buttons">
      <button class="edit-btn">Editar/Ver</button>
    </div>
  `;
  movimientosAgregados.appendChild(div);
});
