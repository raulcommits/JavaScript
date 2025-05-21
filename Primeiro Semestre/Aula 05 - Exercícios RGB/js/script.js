const barraVermelha = document.querySelector('.red');
const barraVerde = document.querySelector('.green');
const blueSlider = document.querySelector('.blue');
const valorR = document.getElementById('valorR');
const valorG = document.getElementById('valorG');
const valorB = document.getElementById('valorB');
const bolinha = document.querySelector('.bolinha');

function atualizarCor() {
    const r = barraVermelha.value;
    const g = barraVerde.value;
    const b = blueSlider.value;

    valorR.textContent = r;
    valorG.textContent = g;
    valorB.textContent = b;

    bolinha.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

barraVermelha.addEventListener('input', atualizarCor);
barraVerde.addEventListener('input', atualizarCor);
blueSlider.addEventListener('input', atualizarCor);