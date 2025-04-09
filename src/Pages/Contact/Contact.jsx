import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from './Contact.module.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import ContactLink from "../../Components/ContactLink/ContactLink.jsx";

function Contact() {

    useEffect(() => {
        document.title = "Contact | Sebastian Rucabado"
    }, []);

    return (
        <>
            <Navbar page1="/" title1="Home" page2="/projects" title2="Projects" page3="/technologies" title3="Technologies"/>
            <main className={styles.main}>

                <section className={styles.top_section}>
                    <h1 className={styles.top_section_h1}>Thanks for reaching out!</h1>
                </section>

                <section className={styles.bottom_section}>
                    <h1>Contact</h1>
                    <div className={styles.links}>
                        <ContactLink title="sebastianrucabado123@gmail.com" src="/Gmail.png"/>
                        <ContactLink title="YouTube" href="https://www.youtube.com" src="/YouTube.png"/>
                        <ContactLink title="Facebook" href="https://www.facebook.com/people/Sebastian-Rucabado/pfbid027HknatQUPXe6ABxtAD2M1Go6w1uapasuBMdbKzNkshYKSa7PDjEWt467kcmFr7bsl/?rdid=lshNllnUDsvIZMrB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ARYA5Kf8b%2F" src="/Facebook.png"/>          
                    </div>
                </section>

            </main>
        </>
    );
}

export default Contact;