import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar.jsx';

function Projects() {

    useEffect(() => {
        document.title = "Projects | Sebastian Rucabado"
    }, []);

    return (
        <>
            <Navbar page1="/" title1="Home" page2="/technologies" title2="Technologies" page3="/contact" title3="Contact"/>
        </>
    );
}

export default Projects;