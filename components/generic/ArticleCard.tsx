import React from "react";
import styles from "styles/components/generic/ArticleCard.module.scss";


export interface CardProps {
    title: string;
    blurb: string;
    slug: string;
}

export default function ArticleCard(props: CardProps) {
    return (
        <div className={styles.card}>
            <h4>{props.title}</h4>
            <span>{props.blurb}</span>
        </div>
    );
}