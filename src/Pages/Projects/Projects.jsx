import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from './Projects.module.css';
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
                   are 25 grid squares. First to connect 5 in a row,
                   column or diagonally, wins the game.`,
            src: "/TicTacToe.png"
        },
        {
            title: "2D platformer",
            desc: `A very simple 2D platformer. You play as a
                   Geometry Dash cube and your goal is to get
                   the coin at the top. There's a timer, that
                   measures your time spent on the level. That
                   might sound easy, but there are 6 moving
                   obstacles in your way. Go give it a shot!`,
            src: "/card1_home.png"
        }
    ];

    return (
        <>
            <Navbar page1="/" title1="Home" page2="/technologies" title2="Technologies" page3="/contact" title3="Contact"/>
            <main className={styles.main}>
                <ul className={styles.projects_container}>
                    {projects.map((project, index) => (
                        <li key={index} className={styles.li}>
                            <Project title={project.title} desc={project.desc} src={project.src} />
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Projects;