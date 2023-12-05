import React, { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleClick = async (event) => {
    event.preventDefault();

    try {
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
      const response = await fetch('http://localhost:3000/api/auth/login', opcoesFetch);

      // Verificar se a requisição foi bem-sucedida
      if (response.ok) {
        // Extrair o token do corpo da resposta
        const { token } = await response.json();

        // Armazenar o token no localStorage
        localStorage.setItem('Authorization', token);

        // Lidar com os dados da resposta, se necessário
        console.log('Resposta da API:', token);
      } else {
        // Lidar com erros na requisição
        console.error('Erro na requisição:', response.statusText);
      }
    } catch (error) {
      // Lidar com erros gerais
      console.error('Erro na requisição:', error);
    }
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