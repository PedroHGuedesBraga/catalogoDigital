import Header from "../../components/Header"
import Footer from '../../components/Footer'
import Container from "../../components/Container"
import React, { useState, Button } from 'react';
import styles from './Login.module.css';


function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    // Manipuladores de eventos para atualizar os estados
    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    // Manipulador de evento para lidar com o envio do formulário (pode adicionar lógica de autenticação aqui)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login:', login, 'Senha:', senha);
        // Adicione aqui a lógica de autenticação, por exemplo, uma chamada de API para verificar credenciais
    };
    return (
        <>
            <Header />
            <Container>
                <div className={styles.login}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <h3>Login</h3>
                            <input className={styles.input} type="text" value={login} onChange={handleLoginChange} />
                        </label>
                        <br />
                        <label>
                            <h3>Senha</h3>
                            <input className={styles.input} type="password" value={senha} onChange={handleSenhaChange} />
                        </label>
                        <br />
                        <br />
                        <button className={styles.button} type="submit">Login</button>
                      
                    </form>
                </div>
            </Container>
            <Footer />
        </>

    )
}
export default Login