import React, { useState } from 'react';

export default function Cadastro() {
  const [gmail, setGmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const salvarcontatos = (event) => {
    event.preventDefault();

    if (!gmail.endsWith('@gmail.com')) {
      setErro('O e-mail deve terminar com @gmail.com');
      return;
    }
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some((user) => user.Gmailsalvo === gmail)) {
      setErro('Esse e-mail já está registrado');
      return;
    }

    usuarios.push({ Gmailsalvo: gmail, Senhasalvo: senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setErro(<a href="/app">finalizar</a>);
    setGmail('');
    setSenha('');
  };

  return (
    <>
      <br />
      <h1>Cadastro</h1>
      <br />
      <label htmlFor="gma">Gmail: </label>
      <input type="email" onChange={(event) => setGmail(event.target.value)} />
      <br />
      {gmail}
      <br />
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <br />

      <label htmlFor="sen">Senha: </label>
      <input
        type="password"
        onChange={(event) => setSenha(event.target.value)}
      />
      <br />
      {senha}
      <br />
      <br />
      <button onClick={salvarcontatos}>SALVAR</button>
      <br />
      <a href="/">Pagina de inicio</a>
    </>
  );
}
