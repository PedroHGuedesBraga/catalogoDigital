import styles from './EditProduto.module.css'
import React, { useState } from 'react';

const EditProduto = () => {
  const [produtoToUpdate, setProdutoToUpdate] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    img: '',
  });

  const handleEditarProduto = async () => {
    try {
      // Configurar as opções da requisição PUT
      const opcoesFetch = {
        method: 'PUT',
        headers: {
          'Authorization': localStorage.getItem('Authorization'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtoToUpdate),
      };

      // Realizar a requisição fetch
      const response = await fetch(`http://localhost:3000/api/product/${produtoToUpdate.id}`, opcoesFetch);

      // Verificar se a requisição foi bem-sucedida
      if (response.ok) {
        // Lidar com os dados da resposta, se necessário
        console.log('Produto atualizado com sucesso!');
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
    <section className={styles.card} >
      <h3>ID do Produto</h3>
      <input
        type="text"
        value={produtoToUpdate.id}
        onChange={(e) => setProdutoToUpdate({ ...produtoToUpdate, id: e.target.value })}
      />
      <h3>NOME</h3>
      <input
        type="text"
        value={produtoToUpdate.name}
        onChange={(e) => setProdutoToUpdate({ ...produtoToUpdate, name: e.target.value })}
      />
      <h3>PREÇO</h3>
      <input
        type="number"
        value={produtoToUpdate.price}
        onChange={(e) => setProdutoToUpdate({ ...produtoToUpdate, price: parseFloat(e.target.value) })}
      />
      <h3>DESCRIÇÃO</h3>
      <input
        type="text"
        value={produtoToUpdate.description}
        onChange={(e) => setProdutoToUpdate({ ...produtoToUpdate, description: e.target.value })}
      />
      <h3>IMAGEM</h3>
      <input
        type="text"
        value={produtoToUpdate.img}
        onChange={(e) => setProdutoToUpdate({ ...produtoToUpdate, img: e.target.value })}
      />
      <button onClick={handleEditarProduto}>EDITAR</button>
    </section>
  );
};

export default EditProduto;
