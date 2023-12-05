// DeleteProduto.jsx
import React, { useState } from 'react';
import styles from './DeleteProduto.module.css';

const DeleteProduto = () => {
  const [produtoToDelete, setProdutoToDelete] = useState('');

  const handleExcluirProduto = async () => {
    try {
      // Configurar as opções da requisição DELETE
      const opcoesFetch = {
        method: 'DELETE',
        headers: {
          'Authorization': localStorage.getItem('Authorization'),
          'Content-Type': 'application/json',
        },
      };

      // Realizar a requisição fetch
      const response = await fetch(`http://localhost:3000/api/product/${produtoToDelete}`, opcoesFetch);

      // Verificar se a requisição foi bem-sucedida
      if (response.ok) {
        // Lidar com os dados da resposta, se necessário
        console.log('Produto excluído com sucesso!');
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
    <section className={styles.card}>
      <h3>ID do Produto</h3>
      <input
        type="text"
        value={produtoToDelete}
        onChange={(e) => setProdutoToDelete(e.target.value)}
      />
      <button onClick={handleExcluirProduto}>EXCLUIR</button>
    </section>
  );
};

export default DeleteProduto;
