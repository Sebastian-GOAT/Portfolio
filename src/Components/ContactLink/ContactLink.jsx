import styles from './ContactLink.module.css';

function ContactLink(props) {

    return (
        <a className={styles.button} href={props.href} target="_blank">
            <img className={styles.icon} src={props.src} />
            {props.title}
        </a>
    );
}

export default ContactLink;