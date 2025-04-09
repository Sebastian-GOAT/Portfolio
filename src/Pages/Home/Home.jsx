import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from './Home.module.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Card from "../../Components/Card/Card.jsx";
import TechButton from "../../Components/TechButton/TechButton.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Home() {

    useEffect(() => {
        document.title = "About | Sebastian Rucabado"
    }, []);

    return (
        <>
            <Navbar page1="/projects" title1="Projects" page2="/technologies" title2="Technologies" page3="/contact" title3="Contact"/>
            <main className={styles.main}>

                <section className={styles.top_section}>
                    <div className={styles.top_section_headings}>
                        <h1 className={styles.top_section_h1}>Sebastian, Frontend Developer</h1>
                        <p className={styles.top_section_p}>I make complicated designs come to life.</p>
                    </div>
                    <img className={styles.me} src="/me.png" />
                </section>

                <section className={styles.description}>
                    <p className={styles.description_p}>
                    Hi, I'm <b>Sebastian Rucabado</b>, a 14 year-old frontend developer
                    with a passion for creating interactive and user-friendly web
                    experiences. I specialize in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>, but
                    I like to make games in <b>Python</b> in my free time. I enjoy exploring new
                    technologies to build innovative projects.
                        
                    </p>
                </section>

                <section className={styles.middle_section}>
                    <h1 className={styles.middle_section_h1}>What I've been working on</h1>
                    <div className={styles.middle_section_grid}>
                        <Link to={'/projects'}><Card text="Chess Pro Coaching" img="/card2_home.png"/></Link>
                        <Link to={'/projects'}><Card text="2D Platformers" img="/card1_home.png"/></Link>
                        <Link to={'/projects'}><Card text="3D Renderer" img="/card3_home.png"/></Link>
                        <Link to={'/projects'}><Card text="Chat app" img="/card4_home.png"/></Link>
                    </div>
                    <Link to={'/projects'}><button className={styles.middle_section_button}>See more!</button></Link>
                </section>

                <section className={styles.bottom_section}>
                    <h1 className={styles.bottom_section_h1}>Skills</h1>
                    <div className={styles.bottom_section_buttons}>
                        <TechButton title="HTML" src="/HTML.png" />
                        <TechButton title="CSS" src="/CSS.png" />
                        <TechButton title="JavaScript" src="/JavaScript.png" />
                        <TechButton title="React JS" src="/React.png" />
                        <TechButton title="Tkinter Canvas" src="/Python.png" />
                    </div>
                    <Link to={'/technologies'}><button className={styles.bottom_section_button}>Learn more</button></Link>
                </section>

            </main>
            <Footer />
        </>
    );
}

export default Home;