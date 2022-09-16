import React from "react";
import styles from "styles/Home.module.scss";
import NavBar from "components/generic/NavBar";
import Footer from "components/generic/Footer";
import LatestArticles from "components/LatestArticles";
import Cosmic from "cosmicjs";

const api = Cosmic();
const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG_TESTING,
    read_key: process.env.COSMIC_BUCKET_READ_KEY_TESTING
});

export default function Home({articles}) {
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
            <LatestArticles articles={articles} />
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const articlesData = await bucket.objects.find({type: "article"}).props("slug,title,content,metadata").limit(10);
    const articles = await articlesData.objects;

    return {
        props: {
            articles,
        },
    };
}