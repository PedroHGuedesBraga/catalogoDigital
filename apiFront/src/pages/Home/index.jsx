
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <Container>

        <Header />
        <section className={styles.home}>
          <div className='apresentacao'>


            <h1>Bem vindo ao nosso </h1>
            <h1>catálogo virtual !</h1>
            <br />
            <Link className={styles.btnOrange} to='/produtos'>PRODUTOS</Link>




          </div>
        </section>
        <Footer />
      </Container>

    </>
  )
}
export default Home
