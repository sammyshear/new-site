import React from "react";
import styles from "styles/blog/Home.module.scss";
import NavBar from "components/generic/NavBar";
import Footer from "components/generic/Footer";
import Cosmic from "cosmicjs";
import ArticleCard from "components/generic/ArticleCard";

const api = Cosmic();
const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG_TESTING,
    read_key: process.env.COSMIC_BUCKET_READ_KEY_TESTING
});

export default function BlogHome(props) {
    return (
        <>
            <NavBar/>
            <section className={styles.blogHeader}>
                <h3>Blog {props.home[0].title}</h3>
                <span dangerouslySetInnerHTML={{ __html: props.home[0].content}} />
            </section>
            <main className={styles.articles}>
                {props.articles.map((article, i) => {
                    return (<ArticleCard title={article.title} slug={article.slug} key={i}/>);
                })}
            </main>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const homeData = await bucket.objects.find({type: "home"}).props("slug,title,content,metadata");
    const articlesData = await bucket.objects.find({type: "article"}).props("slug,title,content,metadata");
    const articles = await articlesData.objects;
    const home = await homeData.objects;

    return {
        props: {
            home,
            articles,
        },
    };
}