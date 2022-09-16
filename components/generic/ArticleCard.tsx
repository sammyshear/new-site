import React from "react";
import styles from "styles/components/generic/ArticleCard.module.scss";
import {useRouter} from "next/router";

export interface CardProps {
    title: string;
    slug: string;
}

export default function ArticleCard(props: CardProps) {
    const router = useRouter();

    return (
        <div onClick={() => {router.push(`/blog/article/${props.slug}`)}} className={styles.card}>
            <h4>{props.title}</h4>
        </div>
    );
}