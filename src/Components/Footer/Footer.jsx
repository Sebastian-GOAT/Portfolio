import styles from './Footer.module.css';

function Footer() {

    return (
        <footer className={styles.footer}>
            <b style={{ color: 'white' }}>&copy; {new Date().getUTCFullYear()} Sebastian Rucabado</b>
        </footer>
    );
}

export default Footer;