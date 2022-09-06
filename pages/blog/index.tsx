import React from "react";
import styles from "styles/blog/Home.module.scss";
import NavBar from "components/NavBar";

export default function BlogHome() {
    return (
        <>
            <NavBar />
            <header className={styles.blogHeader}></header>
            <main>

            </main>
        </>
    );
}