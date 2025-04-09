import styles from './Card.module.css';

function Card(props) {

    return (
        <div className={styles.card} data-text={props.text} style={{ backgroundImage: `url(${props.img})` }}></div>
    );
}

export default Card;