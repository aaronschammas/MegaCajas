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

  // Función para eliminar el movimiento de la pila
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

  // Limpiar campos
  document.getElementById('monto').value = '';
  document.getElementById('detalle').value = '';
});

const datosEjemplo = [
  { fecha: '01/05/2025', monto: 500, movimiento: 'Venta', turno: 'M', realizadoPor: 'Admin' },
  { fecha: '02/05/2025', monto: 300, movimiento: 'Servicio', turno: 'T', realizadoPor: 'Cajero 1' }
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