import React from "react";
import "./Botoes.css";

function Index({action, label, type}) {
    return (
        <p onClick={action} className={`botoes ${type? type: ""}`}>
            {label}
        </p>
    );
}

export default Index;