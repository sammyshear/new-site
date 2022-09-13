import React from "react";
import {useRouter} from "next/router";
import styles from "styles/components/NavBar.module.scss";

export default function NavBar() {

    const router = useRouter();

    return (
        <header className={styles.bar}>
            <h2>Sammy Shear</h2>
            <div className={styles.hr}>
                <hr />
            </div>
            <div className={styles.btns}>
                <button className={styles.navBtn} onClick={() => router.push("/")}>Home</button>
                <button className={styles.navBtn} onClick={() => router.push("/about")}>About</button>
                <button className={styles.navBtn} onClick={() => router.push("/blog")}>Blog</button>
                <button className={styles.navBtn} onClick={() => router.push("https://github.com/sammyshear")}>Github
                </button>
                <button className={styles.navBtn} onClick={() => router.push("https://dev.to/sammyshear")}>dev.to
                </button>
            </div>
        </header>
    );
}