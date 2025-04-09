import styles from './Project.module.css';

function Project(props) {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className={styles.img} src={props.src} />
            </div>
            <div className={styles.right}>
                <h1 className={styles.h1}>{props.title}</h1>
                <p className={styles.p}>{props.desc}</p>
                <p className={styles.madewith}>Made with: </p><b>{props.tech}</b>
            </div>
        </div>
    );
}

export default Project;