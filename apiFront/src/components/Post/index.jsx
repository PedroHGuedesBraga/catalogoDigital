import styles from './Post.module.css'
import React, { useState } from 'react';
function Post(){
    const [novoProduto, setNovoProduto] = useState({
        name: '',
        price: '',
        description: '',
        img: '',
      });
    const handleAdicionarProduto = async (event) => {
      event.preventDefault();
  
      try {
        // Configurar os dados que você deseja enviar no corpo da requisição
        const dados = {
          name: novoProduto.name,
          price: novoProduto.price,
          description: novoProduto.description,
          img: novoProduto.img,
        };
        
        // Configurar as opções da requisição
        const opcoesFetch = {
          method: 'POST',
          headers: {
            'Authorization': localStorage.getItem('Authorization'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dados),
        };
        console.log(opcoesFetch);
  
        // Realizar a requisição fetch
        const response = await fetch('http://localhost:3000/api/product', opcoesFetch);
  
        // Verificar se a requisição foi bem-sucedida
        if (response.ok) {
          // Limpar os campos após adicionar o produto
          setNovoProduto({
            name: '',
            price: 0,
            description: '',
            img: '',
          });
  
          // Lidar com os dados da resposta, se necessário
          console.log('Produto adicionado com sucesso!');
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
            <h3>NOME</h3>
            <input
              type="text"
              value={novoProduto.name}
              onChange={(e) => setNovoProduto({ ...novoProduto, name: e.target.value })}
            />
            <h3>PREÇO</h3>
            <input
              type="number"
              value={novoProduto.price}
              onChange={(e) => setNovoProduto({ ...novoProduto, price: parseFloat(e.target.value) })}
            />
            <h3>DESCRIÇÃO</h3>
            <input
              type="text"
              value={novoProduto.description}
              onChange={(e) => setNovoProduto({ ...novoProduto, description: e.target.value })}
            />
            <h3>IMAGEM</h3>
            <input
              type="text"
              value={novoProduto.img}
              onChange={(e) => setNovoProduto({ ...novoProduto, img: e.target.value })}
            />
            <button onClick={handleAdicionarProduto}>ADICIONAR</button>
          </section>
        
      );
  

}
export default Post;