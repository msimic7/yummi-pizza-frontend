import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = ({ isHome = false }) => {
    return (
        <div className={styles.nav}>
            {isHome ? (
                ""
            ) : (
                <li className={styles.home__link}>
                    <Link to="/">YummiPizza</Link>
                </li>
            )}
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
