import React from "react";
import styles from "styles/Home.module.scss";
import NavBar from "components/generic/NavBar";
import LatestArticles from "components/LatestArticles";

export default function Home() {
    return (
        <>
            <NavBar/>
            <main className={styles.content}>
                <p>
                    My name is Sammy Shear, I am a developer and CS student, this is my website. To learn more about me,
                    you can head to the about section. To check out my public projects, you can check out my GitHub. I
                    also write articles on my blog/dev.to, and starting soon I will be doing exclusive articles through
                    my own blog. Thanks for stopping by.
                </p>
            </main>
            <LatestArticles/>
        </>
    )
}
