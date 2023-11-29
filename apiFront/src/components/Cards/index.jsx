import styles from './Card.module.css'     

function Card(){
    return(
        <section className={styles.card}>
            <h3>BASE NINA SECRETS</h3>
            <p>IMAGEM</p>
            <div className={styles.card_footer}>
                <h3>120.00 R$</h3>
            </div>


        </section>
    )
}
export default Card