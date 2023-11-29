import Header from "../../components/Header"
import Footer from '../../components/Footer'
import Container from "../../components/Container"
import styles from "./Contact.module.css"
import { FaWhatsapp , FaInstagram  } from "react-icons/fa";

function Contact() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.contact}>
                    <h2>Gostou de um dos nossos produtos ?</h2>
                    <h3>Entre em contato conosco por um de nossos links !</h3>
                    <div className={styles.icons}> 
                    <a href="https://wa.me/5583991217070?text=Ol%C3%A1%20gostaria%20de%20adquirir%20um%20produto"><FaWhatsapp className={styles.iconW} /></a>
                    <a href="https://www.instagram.com/eipmake/"><FaInstagram className={styles.iconI} /></a>
                        
                        
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}
export default Contact