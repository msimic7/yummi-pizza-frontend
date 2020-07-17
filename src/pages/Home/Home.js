import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Nav from "../../components/Nav";

const Home = () => {
    return (
        <div className={styles.home}>
            <Nav />
            <div className={styles.ordernow}>
                <div className={styles.ordernow__content}>
                    <h1>YummiPizza</h1>
                    <p>Fastest delivery in town!</p>
                    <Link to="/menu">
                        <button>ORDER NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
