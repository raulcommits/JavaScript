/*
//alert "Hello World"
// let é uma variável e const é uma constante
let endereço = prompt ("Por favor, informe o seu endereço:");
let nome = prompt ("Por favor, informe o seu nome:");
let idade = prompt ("Por favor, informe a sua idade");
alert("Meu nome é" + nome + "e eu tenho" + idade + "anos. Moro em" + "endereço há tantos anos." );
*/

/*
NO HTML: 
body>
    <h1>O resultado foi <span id="outraCoisa"></span> </h1>
</body>

NO JS:
const result = document.getElementById("outraCoisa");
result.innerText = resultado;
*/

/*
//if(n1 > n2) {
    alert("O primeiro número é maior");
}   else {
    alert("O segundo é maior");
}*/
/*if (n1 > n2) {
    alert("O primeiro número é maior");
} else if(n2 > n1) {
    alert("O segundo número é maior");
} else {
    alert("Os dois números são iguais");
}*/

/*const n1 = parseInt(prompt("Digite o primeiro número:"));
const n2 = parseInt(prompt("Digite o segundo número:"));
const n3 = parseInt(prompt("Digite o terceiro número:"));

/*if(n1 == n2 || n2 == n3) {
    alert("Existem números iguais");
} else {
    alert("Existem números diferentes");
}

// EXERCÍCIO 22-08
if(n1 > n2 && n1 > n3) {
    alert(`O maior número é ${n1}`);

} else if (n2 > n1 && n2 > n3) {
    alert(`O maior número é ${n2}`);
} else if (n3 > n2 && n3 > n1) {
    alert(`O maior número é ${n3}`);
} else {
    alert("Erro");
}

// EXERCÍCIO 1
/*let nome = prompt ("Digite o seu nome");
alert ("Bem vindo ao sistema, " + nome);*/

// EXERCÍCIO 2
/*let nome = prompt ("Digite o seu nome");
let idade = prompt ("Digite a sua idade");
alert (nome + ", você tem " + idade + " anos ");*/

// EXERCÍCIO 3
/*const brasil = parseInt(prompt("População em Quantidade do Brasil"));
const china = parseInt(prompt("População em Quantidade da China"));
if(brasil > china) {
    alert("A população do Brasil é maior");
} else if (china > brasil) {
    alert("A população da China é maior");
}*/

// EXERCÍCIO 4
/*const n1 = parseInt (prompt("Digite um número:"));

if (n1 % 2 === 0) {
    alert("O número é par");
} else {
    alert("O número é impar");
}*/

//EXERCÍCIO 5
/*const salBrt = parseFloat (prompt("Informe o seu Salário Bruto:"));
const salliq = parseFloat (salBrt - (salBrt * 0.1));
alert("O Salário Líquido é: " + salliq);*/

//EXERCÍCIO 6
/*const celsius = parseFloat (prompt("Informe os graus C:"));
const fahrenheit = parseFloat (celsius * 9/5 + 32);
alert("O valor em graus Fahrenheit é: " + fahrenheit);*/

// EXERCÍCIO 7
/*const n1 = parseInt(prompt("Digite o primeiro número:"));
const n2 = parseInt(prompt("Digite o segundo número:"));
const n3 = parseInt(prompt("Digite o terceiro número:"));

if(n1 > n2 && n1 > n3) {
    alert(`O maior número é ${n1}`);

} else if (n2 > n1 && n2 > n3) {
    alert(`O maior número é ${n2}`);
} else if (n3 > n2 && n3 > n1) {
    alert(`O maior número é ${n3}`);
} else {
    alert("Erro");
}*/

// EXERCÍCIO 8
/* const idade = parseInt (prompt("Digite a sua idade:"));
const anoAtual = parseInt (prompt("Digite o seu ano atual:"));
const anoNasc = (anoAtual - idade);
alert("Seu ano de Nascimento é: " + anoNasc);
*/

//EXERCÍCIO 9
// Exercicio 9 - Calcular IMC

/*const val_Alt = parseFloat (prompt("Informe sua altura"));
const val_Peso = parseFloat (prompt("Informe seu peso"));
const imc = val_Peso / (val_Alt * val_Alt);

    //Verificar se a altura é valida

 if(val_Alt <= 0){
    alert ("Altura inválida. Deve ser maior que zero.")
} else if(imc < 16.9){
    alert("Muito abaixo do peso");
} else if(imc >= 17 && imc <= 18.9){
    alert("Abaixo do peso");
} else if (imc >= 19 && imc <= 26.9){
    alert ("Normal");
} else if (imc >= 27 && imc <= 31.9){
    alert ("Acima do Peso");
} else{
    alert("obesidade");
}
    /*Calcular o IMC:
        IMC = peso / (altura * altura)

//OBS: usar ponto ao invés de virgula para determinar a altura.*/
//-------------------------------------------------------------------------------

    /*//Exercicio 10 - Calcular a Média

const n1 = parseFloat (prompt("Informe sua primeira nota: "));
const n2 = parseFloat (prompt ("Informe sua segunda nota: "));
const n3 = parseFloat (prompt("Informe sua terceira nota: "));
const n4 = parseFloat (prompt("Informe sua quarta nota :"));
const media = parseFloat (n1+n2+n3+n4)/4;

if(n1 >10 || n2>10 || n3>10 || n4>10){
    alert("ERRO! os valores númericos deve ser entre 0 e 10");
}
else if(media >= 7){
    alert ("Aluno aprovado");
}
else if(media >= 5 && media <= 6.9){
    alert ("Aluno em recuperação");
} 
else{
    alert ("Aluno reprovado.");
}*/

