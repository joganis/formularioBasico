
let totalGastos = 0;
let totalPagos = 0;


const totalGastosElem = document.getElementById('total-gastos');
const totalPagosElem = document.getElementById('total-pagos');
const saldoElem = document.getElementById('saldo');
const historySection = document.querySelector('.history-section');

const form = document.getElementById('transaction-form');
const tipo = document.getElementById('type').value;
const monto = parseFloat(document.getElementById('amount').value);
const descripcion = document.getElementById('description').value;


function actualizarFinanzas() {
    const saldo = totalPagos - totalGastos;
    totalGastosElem.textContent = `$${totalGastos}`;
    totalPagosElem.textContent = `$${totalPagos}`;
    saldoElem.textContent = `$${saldo}`;
}

function agregarTransaccionAlHistorial(tipo, monto, descripcion) {
    const listItem = document.createElement('li');
    listItem.textContent = `${tipo}: $${monto} - ${descripcion}`;
    historySection.appendChild(listItem);
}

const actualizarTotales = (tipo, monto) => {
    if (tipo === 'gasto') {
        totalGastos += monto;
    } else if (tipo === 'pago') {
        totalPagos += monto;
    }
};

form.addEventListener('submit',  (event) => {
   // event.preventDefault(); 
   
    actualizarTotales(tipo, monto)

    actualizarFinanzas();   
    agregarTransaccionAlHistorial(tipo, monto, descripcion);
    form.reset();
});
