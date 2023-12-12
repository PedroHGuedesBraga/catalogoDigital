import styles from './Header.module.css'
import {Link,} from 'react-router-dom'

function Header(){
    return(
        <header className={styles.header}>
           <Link to="/"><span>EIP</span></Link>          
           <nav>
            <Link to="/">Home</Link>
            <Link to="produtos">Produtos</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/login">Login</Link>
           </nav>
        </header>
    )
}

export default Header