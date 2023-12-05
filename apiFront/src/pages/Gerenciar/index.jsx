import DeleteProduto from '../../components/DELETE';
import Post from '../../components/Post';
import EditProduto from '../../components/Put';
import styles from './GerenciarProduto.module.css';
function GerenciarProduto() {

    return (
      <div className={styles.page}>
        <Post/>
        <DeleteProduto/>
        <EditProduto/>
      </div>
    );
  }
  
  export default GerenciarProduto;