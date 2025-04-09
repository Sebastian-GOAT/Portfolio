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
            src: "/TicTacToe.png",
            tech: "HTML, CSS, JS"
        },
        {
            title: "2D platformer",
            desc: `A very simple 2D platformer. You play as a
                   Geometry Dash cube and your goal is to get
                   the coin at the top. There's a timer, that
                   measures your time spent on the level. That
                   might sound easy, but there are 6 moving
                   obstacles in your way.`,
            src: "/card1_home.png",
            tech: "Python + Tkinter"
        },
        {
            title: "3D Renderer",
            desc: `A 3D rendering app that allows you to import
                   your own .obj models, and the renderer will
                   render them in 3D. You can even rotate it on
                   the X, Y or Z axis.`,
            src: "/card3_home.png",
            tech: "Python + Tkinter"
        },
        {
            title: "Real time chat app",
            desc: `A web-app, where you can chat with other
                   connected users in real-time (that means
                   no refreshing needed). The app uses web
                   sockets, to get real-time data from the
                   server.`,
            src: "/card4_home.png",
            tech: "HTML, CSS, JS + Node.js"
        },
        {
            title: "Chess pro coaching",
            desc: `A website, where you can book highly skilled
                   chess coaches, to improve your games. The
                   website is aviable at: http://www.chessprocoaching.com`,
            src: "/card2_home.png",
            tech: "HTML, CSS, JS, PHP"
        }
    ];

    return (
        <>
            <Navbar page1="/" title1="Home" page2="/technologies" title2="Technologies" page3="/contact" title3="Contact"/>
            <main className={styles.main}>
                <ul className={styles.projects_container}>
                    {projects.map((project, index) => (
                        <li key={index} className={styles.li}>
                            <Project title={project.title} desc={project.desc} src={project.src} tech={project.tech} />
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Projects;