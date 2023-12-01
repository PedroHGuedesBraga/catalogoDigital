// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    
    // Configurar os dados que você deseja enviar no corpo da requisição
    const dados = {
      email: login,
      password: senha,
    };

    // Configurar as opções da requisição
    const opcoesFetch = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    };

    // Realizar a requisição fetch
    fetch('http://localhost:3000/api/auth/login', opcoesFetch)
      .then(response => response.json())
      .then(data => {
        // Lidar com os dados da resposta, se necessário
        console.log('Resposta da API:', data);
      })
      .catch(error => {
        // Lidar com erros, se houver
        console.error('Erro na requisição:', error);
      });
  };

  return (
    <>
      <div className={styles.login}>
        <form>
          <label>
            <h3>Login</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>
          <br />
          <label>
            <h3>Senha</h3>
            <input
              className={styles.input}
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button onClick={handleClick}>LOGIN</button>
        </form>
      </div>
    </>
  );
}

export default Login;