import React, { useState } from "react";
import { href } from "react-router";

export default function Login() {
    const [gmailLogin, setGmailLogin] = useState(""); 
    const [senhaLogin, setSenhaLogin] = useState("");
    const [erro, setErro] = useState("");

    const logarcontato = (event) => {
        event.preventDefault();
        
        if (!gmailLogin.endsWith("@gmail.com")) {
            setErro("O e-mail deve terminar com @gmail.com");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let usuarioEncontrado = usuarios.find(user => 
            user.Gmailsalvo === gmailLogin && user.Senhasalvo === senhaLogin
        );

        if (usuarioEncontrado) {
            setErro(<a href='/app'>finalizar</a>);
        } else {
            setErro("E-mail ou senha incorretos");
        }
    };

    return (
        <>
            <br />
            <h1>Login</h1>
            <br />

            <label htmlFor="gma">Gmail: </label>
            <input 
                type="email" 
                value={gmailLogin}
                onChange={(event) => setGmailLogin(event.target.value)}
            />
            <br />

            <label htmlFor="sen">Senha: </label>
            <input 
                type="password" 
                value={senhaLogin}
                onChange={(event) => setSenhaLogin(event.target.value)}
            />
            <br />

            {erro && <p style={{ color: "red" }}>{erro}</p>}
            <br />

            <center>
                <button onClick={logarcontato}>Logar</button>
            </center>

            <br />
            <a href='/'>Pagina de inicio</a>
        </>
    );
}