import React, { useState } from "react";

function Contador() {
    const [algarismo, setAlgarismo] = useState(0);

        return  <div>
                    <p>Valor: {algarismo}</p>
                    <button onClick = {() => {
                        setAlgarismo(algarismo - 1);   
                    }}>
                        Subtrai
                    </button>  

                    <button onClick={() => {
                        setAlgarismo(algarismo + 1);
                    }}>
                        Soma
                    </button>
                </div>
}

export default Contador;