import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul className={styles.links}>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
