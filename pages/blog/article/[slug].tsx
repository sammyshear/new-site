import React, {useEffect, useState} from "react";
import styles from "styles/blog/Article.module.scss";
import Cosmic from "cosmicjs";
import LatestArticles from "components/LatestArticles";
import NavBar from "components/generic/NavBar";


const api = Cosmic();
const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG_TESTING,
    read_key: process.env.COSMIC_BUCKET_READ_KEY_TESTING
});

export interface IArticle {
    title: string;
    content: string;
    slug: string;
}

export default function ArticlePage({article}) {
    return (
        <>
            <NavBar />
            <header className={styles.articleHeader}>
                <h3>{article.title}</h3>
            </header>
            <article className={styles.main} dangerouslySetInnerHTML={{__html: article.content}}/>
            <LatestArticles/>
        </>
    );
}

export async function getStaticProps({params}) {
    const articlesData = await bucket.objects.find({type: "article"}).props("slug,title,content,metadata");
    const article = await articlesData.objects.find({slug: params.slug})[0];

    return {
        props: {
            article,
        },
    };
}

export async function getStaticPaths() {
    const articlesData = await bucket.objects.find({type: "article"}).props("slug,title,metadata");
    const articles = await articlesData.objects;

    const paths = articles.map((article) => {
            return {
                params: {
                    slug: article.slug
                }
            }
        }
    );

    return {paths, fallback: false};
}