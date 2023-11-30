import styles from './CardUnique.module.css';

// eslint-disable-next-line react/prop-types
function CardUnique({name,description,price,img,_id}) {

  return (
    <div className={styles.detail}>
      
      <div className={styles.imageContainer}>
        <img src={img} className={styles.image} />
      </div>
      
      <div className={styles.productDetails}>
        <h2 className={styles.title}>{name}</h2>       
        <h2 className={styles.price}>{price} R$</h2>
        <p className={styles.description}>{description}</p>
        <h3>ID :{_id}</h3>
      </div>
    </div>
  );
}

export default CardUnique;