//import styles from './Detail.module.css';
import CardUnique from "../../components/CardUnique";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Detail() {
  /*
  Resumo da tarde : no card do catalogo, crio um Link, que vai 1 me levar a pagina de Detalhes, 2 guardar o _id do produto que acabo de clickar, depois ele vai inserir esse id na rota do proprio link  <Link className={styles.btnOrange} to={`/detail/${_id}`}>VER</Link>, assim, abrindo a page Detais, que vai carregar minha pagina, ao carregar, preciso inserir esse _id numa constante, assim  const {_id} = , o useParams(); pega o id que vai ser passado na URL e o armazena, com tudo isso feito, posso chamar meu useState para carregar os dados, e meu fetch para chamar meu GetById da minha API, passando como variavel.
  LEMBRAR  DE : INSERIR NA ROTA, o /:_id E SIM, ELA NAO CONFIGURA COMO STRING E SIM COMO VALOR DINAMICO <Route path='/detail/:_id' element={<Detail/>}></Route>
  */ 
  const {_id} = useParams();
  //Armazenar os produtos
  const [produto, setProduto] = useState([])
  //Para preencher a lista, precisa fazer uma requisição para a API
  //Use effect, dentro dele vai executar uma função, ao passar o [] vazio, siginfica que essa função vai ser executada apenas uma vez
  useEffect(() => {
    //Precisa, fazer uma requesição para a API, ela vai ser asyncrona
    const buscarProduto = async () => {
      /* basicamente : Espere o fetch ter sucesso, quando ele tivver sucesso, armazene na function reponse
      espere o response.json() ser finalizado, quando ele for finalizado, armazene o resultado em data
      */
      //essa const vai armazenar a resposta do fetch mediante a reuisição
      const response = await fetch(`http://localhost:3000/api/product/${_id}`)
      //a response vai ser uma promessa, que precisa se tratada :
      const data = await response.json() // vai armazenar a resposta no formato json
      //após isso, preciso armazenar meus dados, dentro do meu estado usando o useState setProdutos, que vai setar os produtos armazenados na variavel de produtos
      //com produtos sendo renderizados a variavel produtos, posso passar parametros abaixo para renderizar os json com retorno
      setProduto(data)
    }
    buscarProduto()

  }, [])

  return (
    <>
      <section>
        <CardUnique
          key={produto.id}
          name={produto.name}
          img={produto.img}
          price={produto.price}
          description={produto.description}
        />
      </section>
    </>
  );
}

export default Detail;