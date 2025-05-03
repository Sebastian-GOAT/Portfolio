import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar.jsx';
import styles from './Technologies.module.css';

function Technologies() {

    useEffect(() => {
        document.title = "Technologies | Sebastian Rucabado"
    }, []);

    const technologies = [
        {
            src: "/HTML.png",
            title: "HTML",
            desc: "The backbone of every web page — defining structure and content.",
        },
        {
            src: "/CSS.png",
            title: "CSS",
            desc: "The language that brings style, layout, and design to the web.",
        },
        {
            src: "/JavaScript.png",
            title: "JavaScript",
            desc: `The language that brings interactivity and logic to the web.`,
        },
        {
            src: "/React.png",
            title: "React JS",
            desc: `"Any application that can be written in JavaScript, will eventually be written in JavaScript."`,
        },
        {
            src: "/Python.png",
            title: "Tkinter Canvas",
            desc: "I'm mainly using it for 2D games, but I even used it to make a 3D renderer.",
        }
    ];

    return (
        <>
            <Navbar page1="/" title1="Home" page2="/projects" title2="Projects" page3="/contact" title3="Contact"/>
            <section className={styles.section}>
                <div className={styles.top}>
                    <h1 className={styles.h1}>My skills and technologies</h1>
                </div>
                <div className={styles.container}>
                    <ul className={styles.ul}>
                        {technologies.map((tech, index) => (
                            <li key={index}>
                                <div className={styles.card}>
                                    <div className={styles.card_top}>
                                        <img className={styles.img} src={tech.src} />
                                    </div>
                                    <div className={styles.card_bottom}>
                                        <h2 className={styles.h2}>{tech.title}</h2>
                                        <p className={styles.desc}>{tech.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Technologies;