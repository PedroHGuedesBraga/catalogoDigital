
import { Link } from "react-router-dom"
import styles from './Home.module.css'

function Home() {
  return (
    <>
      
        <section className={styles.home}>
          <div className='apresentacao'>


            <h1>Bem vindo ao nosso </h1>
            <h1>catálogo virtual !</h1>
            <br />
            <Link className={styles.btnOrange} to='/produtos'>PRODUTOS</Link>




          </div>
        </section>

    </>
  )
}
export default Home
