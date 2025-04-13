function nome_funcao () {
    alert ("Função executada com sucesso");
}

function somarNumeros (n1, n2) {
    let result = n1 + n2;
    alert(result);
}

function bodi () {
    const kolor = document.getElementById("kolor").value;

    let body = document.body;
    body.style.background = kolor;
}

function mostrarNome () {
    const nomeDigitado = document.getElementById("insereNomy").value;
    const nomeEscrito = document.getElementById("mostraNomy");
    const titulo = document.getElementById("titulo");

    nomeEscrito.value = nomeDigitado
    // .value é apenas para INPUT, de resto é textContent
    titulo.textContent = nomeDigitado
}
