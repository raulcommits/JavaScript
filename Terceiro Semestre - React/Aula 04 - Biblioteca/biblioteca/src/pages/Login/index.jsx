import capa from "../../assets/biblioteca.jpg";
import "../Login/Login.css";
import { useState } from "react";
import api from "../../services/api.js";
import { toast } from "react-toastify";

function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const payload = {email, password};

            const {data} = await api.post('/login', payload);

            console.log(data);

            toast.success('Login efetuado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });

            sessionStorage.setItem("tokenJwt", data.token);
            
        } catch(err) {
            alert(err.response.data.response);
        }

    }

    return (
        <>
            <div className="pagina-login">
                <div>
                    <img src={capa} className="img-login" alt="Capa" />
                </div>

                <div className="item-right">
                    <form className="form-login" onSubmit={handleLogin}>
                        <label>Email:
                            <input 
                                type="email"    
                                placeholder="Informe seu email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </label>

                        <label>Senha:
                            <input 
                                type="password"
                                placeholder="Informe sua senha"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                />
                        </label>
                        
                        <button type="submit" className="botao-primario">
                            Acessar
                        </button>

                        <p className="sign-up">
                            Não tem conta?
                            <a to="/registrar" style={{marginLeft: 5}}>
                                Cadastre-se.
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Index;