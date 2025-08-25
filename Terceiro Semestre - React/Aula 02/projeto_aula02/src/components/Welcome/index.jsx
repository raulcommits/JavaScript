import React, {useState} from "react";

function Welcome(props){
    switch (props.genero) {
        case "Homem":
            return <h1>Bem-vindo, cumpade {props.nome}!</h1>
        case "Mulher":
            return <h1>Bem-vinda, moça {props.nome}!</h1>
        default:
            return <h1>Bem-vindo!</h1>
    }
}

export default Welcome;