import React from "react";
import styles from "styles/components/NavBar.module.scss";

export default function NavBar() {
    return (
        <header className={styles.bar}>
            <h2>Sammy Shear</h2>
            <button className={styles.navBtn}>Home</button>
            <button className={styles.navBtn}>About</button>
            <button className={styles.navBtn}>Blog</button>
            <button className={styles.navBtn}>Github</button>
            <button className={styles.navBtn}>dev.to</button>
        </header>
    );
}