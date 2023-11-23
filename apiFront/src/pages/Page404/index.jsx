import Header from "../../components/Header"
import Footer from '../../components/Footer'
import Container from "../../components/Container"
import styles from './Page404.module.css'

function Page404(){
    return(
        <>
        <Header/>
            <Container>
                <h2 className={styles.titulo2}>Ops... Algo deu errado!</h2>
                <div className={styles.texto}>
                    <span className={styles.span} >404</span> <br />
                    <strong className={styles.strong}>Página não encontrada. </strong>
                    <strong> por favor, clique no botão HOME para voltar.</strong>
                </div>
            </Container>
        <Footer/>
        </>
    )
}
export default Page404