import styles from './Card.module.css'     
import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
function Card({name,img, price, _id}){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <img src={img} alt="Imagem" />
            
            <div className={styles.rodape}>
                <h3>{price} R$</h3>
            </div>
            <Link className={styles.btnOrange} to={`/detail/${_id}`}>VER</Link>


        </section>
    )
}
export default Card