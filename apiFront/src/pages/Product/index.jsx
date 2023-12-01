import { useEffect, useState } from 'react'
import Card from '../../components/Cards'
import styles from '../Product/product.module.css'

function Product() {
    //Armazenar os produtos
    const [produtos, setProdutos] = useState([])
    //Para preencher a lista, precisa fazer uma requisição para a API
    //Use effect, dentro dele vai executar uma função, ao passar o [] vazio, siginfica que essa função vai ser executada apenas uma vez
    useEffect(() => {
        //Precisa, fazer uma requesição para a API, ela vai ser asyncrona
        const buscarProduto = async () => {
            /* basicamente : Espere o fetch ter sucesso, quando ele tivver sucesso, armazene na function reponse
            espere o response.json() ser finalizado, quando ele for finalizado, armazene o resultado em data
            */
            //essa const vai armazenar a resposta do fetch mediante a reuisição
            const response = await fetch('http://localhost:3000/api/product')
            //a response vai ser uma promessa, que precisa se tratada :
            const data = await response.json() // vai armazenar a resposta no formato json
            //após isso, preciso armazenar meus dados, dentro do meu estado usando o useState setProdutos, que vai setar os produtos armazenados na variavel de produtos
            //com produtos sendo renderizados a variavel produtos, posso passar parametros abaixo para renderizar os json com retorno
            setProdutos(data)
        }
        buscarProduto()

    }, [])
    
    const [query,setQuery] = useState('');
    const produtosFiltrados = produtos.filter((prod) =>
    prod.name.toLowerCase().includes(query.toLowerCase())
  );
   

    return (
        <section className={styles.produtos}>
        <div className={styles.searchbar}> 
            <input placeholder="Buscar Produto" id="meuInput" className={styles.input}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
        </div>
        {produtos.length > 0 ? (
            <section className={styles.lista}>
            {produtosFiltrados.length > 0 ? (
                produtosFiltrados.map((prod) => (
                <Card
                    key={prod._id} // Utilizei _id para a chave única, ajuste conforme necessário
                    name={prod.name}
                    img={prod.img}
                    price={prod.price}
                    _id={prod._id}
                />
                ))
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
            </section>
        ) : (
            <p>Carregando Produtos</p>
        )}
        </section>
    );
}
export default Product