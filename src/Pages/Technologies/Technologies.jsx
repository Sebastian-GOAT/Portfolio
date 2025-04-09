import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar.jsx';

function Technologies() {

    useEffect(() => {
        document.title = "Technologies | Sebastian Rucabado"
    }, []);

    return (
        <>
            <Navbar page1="/" title1="Home" page2="/projects" title2="Projects" page3="/contact" title3="Contact"/>
        </>
    );
}

export default Technologies;