import styles from './TechButton.module.css';
import { Link } from 'react-router-dom';

function TechButton(props) {

    return (
        <Link className={styles.link} to={'/technologies'}>
            <button className={styles.button}>
                <img className={styles.icon} src={props.src} />
                {props.title}
            </button>
        </Link>
    );
}

export default TechButton;