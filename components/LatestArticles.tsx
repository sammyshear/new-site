import React from "react";
import Rotary from "components/generic/Rotary";
import Cosmic from "cosmicjs";

const api = Cosmic();
const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG_TESTING,
    read_key: process.env.COSMIC_BUCKET_READ_KEY_TESTING
});

export default function LatestArticles() {
    return (
        <>
            Latest Articles
            <Rotary />
        </>
    );
}

export async function getStaticProps({params}) {
    const articlesData = await bucket.objects.find({type: "article"}).props("slug,title,metadata");
    const article = await articlesData.objects;

    return {
        props: {
            article,
        },
    };
}