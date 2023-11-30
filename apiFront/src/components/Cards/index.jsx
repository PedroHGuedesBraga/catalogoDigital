import styles from './Card.module.css'     

function Card({name,img, price}){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <img src={img} alt="Imagem" />
            
            <div className={styles.rodape}>
                <h3>{price} R$</h3>
            </div>


        </section>
    )
}
export default Card