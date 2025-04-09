import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Project from "../../Components/Project/Project.jsx";

function Projects() {

    useEffect(() => {
        document.title = "Projects | Sebastian Rucabado"
    }, []);

    const projects = [
        {
            title: "5x5 Tic Tac Toe",
            desc: `This project is exactly what it looks like.
                   It's just like regular tic tac toe, but there
                   are 25 grid squares.`,
            src: "/TicTacToe.png"
        }
    ];

    return (
        <>
            <Navbar page1="/" title1="Home" page2="/technologies" title2="Technologies" page3="/contact" title3="Contact"/>
            <Project title={projects[0].title}  desc={projects[0].desc} src={projects[0].src} />
        </>
    );
}

export default Projects;