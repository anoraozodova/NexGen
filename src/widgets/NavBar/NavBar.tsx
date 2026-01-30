import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/icons/logo.svg";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.nav__content}>
                    <Link to="/">
                        <img src={logo} alt="logo" className={styles.nav__logo} />
                    </Link>

                    <button
                        className={styles.nav__burger}
                        onClick={() => setOpen(!open)}
                        aria-label="menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>

                    <ul className={`${styles.nav__list} ${open ? styles.active : ""}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact" className={styles.nav__contact}>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
