
import styles from './Page404.module.css'

function Page404(){
    return(
        <>
       
                <h2 className={styles.titulo2}>Ops... Algo deu errado!</h2>
                <div className={styles.texto}>
                    <span className={styles.span} >404</span> <br />
                    <strong className={styles.strong}>Página não encontrada. </strong>
                    <strong> por favor, clique no botão HOME para voltar.</strong>
                </div>
        </>
    )
}
export default Page404