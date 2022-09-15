import React, {useState} from "react";
import ArticleCard, {CardProps} from "./ArticleCard";
import styles from "styles/components/generic/Rotary.module.scss";

type direction = "previous" | "next";

export default function Rotary() {
    const [arr, setArr] = useState<Array<CardProps>>([
        {
            title: "Test",
            blurb: "test 1",
            slug: "test-1"
        },
        {
            title: "Test",
            blurb: "test 2",
            slug: "test-2"
        },
        {
            title: "Test",
            blurb: "test 3",
            slug: "test-3"
        },
        {
            title: "Test",
            blurb: "test 4",
            slug: "test-4"
        },
        {
            title: "Test",
            blurb: "test 5",
            slug: "test-5"
        },
        {
            title: "Test",
            blurb: "test 6",
            slug: "test-6"
        },
        {
            title: "Test",
            blurb: "test 7",
            slug: "test-7"
        },
        {
            title: "Test",
            blurb: "test 8",
            slug: "test-8"
        },
    ]);

    let initialState = [...arr];

    const rotateFunc = (dir: direction) => {
        if (dir === "previous") {
            let temp = [...arr];
            temp.unshift(temp.pop());
            setArr(temp);
        } else {
            let temp = [...arr];
            temp.push(temp.shift());
            setArr(temp);
        }
        initialState = arr;
    };

    return (
        <div className={styles.rotContainer}>
            <ul className={styles.rotary}>
                {initialState.splice(-3).map((card, i) => {
                    return <ArticleCard title={card.title} blurb={card.blurb} slug={card.slug} key={i}/>
                })}
            </ul>
            <div className={styles.controls}>

                <svg className={styles.btn} onClick={() => {
                    rotateFunc("previous")
                }} height="96" viewBox="0 0 24 24" width="96"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                    <path d="M0-.5h24v24H0z" fill="none"/>
                </svg>

                <div className={`${styles.littleDot}  ${styles.littleDotFirst}`}></div>
                <div className={styles.littleDot}>
                    <div className={styles.bigDotContainer}>
                        <div className={styles.bigDot}></div>
                    </div>
                </div>
                <div className={`${styles.littleDot} ${styles.littleDotLast}`}></div>

                <svg className={styles.btn} onClick={() => {
                    rotateFunc("next");
                }}
                     height="96" viewBox="0 0 24 24" width="96"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                    <path d="M0-.25h24v24H0z" fill="none"/>
                </svg>

            </div>
        </div>
    );
}