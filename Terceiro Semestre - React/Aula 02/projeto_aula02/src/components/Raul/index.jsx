import React from "react";
import aImagem from "../../assets/react.svg";

function Index({nome}) {
    return (
        <>
        <h1>Bem vindo</h1>
        <p>{nome}</p>
        <p>Somando 1 + 1 é igual à {1 + 1}</p>
        <p>E multiplicando 3 x 5 é igual à {3 * 5}</p>
        <img src={aImagem} alt="" />
        <a href="">Clique aqui</a>
        </>
    )
}

export default Index