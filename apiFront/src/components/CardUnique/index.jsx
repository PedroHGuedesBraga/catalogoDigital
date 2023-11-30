import styles from './CardUnique.module.css';

// eslint-disable-next-line react/prop-types
function CardUnique({name,description,price,img}) {

  return (
    <div className={styles.detail}>
      
      <div className={styles.imageContainer}>
        <img src={img} className={styles.image} />
      </div>
      
      <div className={styles.productDetails}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.price}>{price} R$</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default CardUnique;