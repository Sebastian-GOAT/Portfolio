import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar(props) {

    return (
        <nav className={styles.nav}>
            <Link to='/'>
                <img className={styles.logo} src="/logo.png" />
            </Link>
            <ul className={styles.ul}>
                <li className={styles.li}><Link className={styles.link} to={props.page1}>{props.title1}</Link></li>
                <li className={styles.li}><Link className={styles.link} to={props.page2}>{props.title2}</Link></li>
                <li className={styles.li}><Link className={styles.link} to={props.page3}>{props.title3}</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;