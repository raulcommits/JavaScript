const Altura = 1.72
const Peso = 109
const Imc = Peso / (Altura * Altura)

if (Altura <= 0) {
    console.log("Se você está digitando, você existe! Então coloque uma altura decente!")
}
    else if (Imc <= 16.9) {
        console.log ("Está muito abaixo do peso! Vê se come")
    }
    else if (Imc >= 17 && Imc <= 18.9) {
        console.log ("Abaixo do peso! Ainda faltam uns nutrientes")
    }
    else if(Imc >= 19 && Imc <= 26.9) {
        console.log ("Normal, está na média")
    }
    else if(Imc >= 27 && Imc <= 31.9) {
        console.log ("Acima do peso! Maneira na comida!")
    }
    else if (Imc >= 32) {
        console.log ("Obesidade! Vá ver um Nutricionista")
    }