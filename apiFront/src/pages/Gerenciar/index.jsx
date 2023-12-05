import DeleteProduto from '../../components/DELETE';
import Post from '../../components/Post';
import styles from './GerenciarProduto.module.css';
function GerenciarProduto() {

    return (
      <div className={styles.page}>
        <Post/>
        <DeleteProduto/>
      </div>
    );
  }
  
  export default GerenciarProduto;