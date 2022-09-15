import React from "react";
import Card from "./Card";
import styles from "styles/components/generic/Rotary.module.scss";

type direction = "previous" | "next";

export default function Rotary() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const rotateFunc = (dir: direction) => {

    };

    return (
        <div className={styles.rotContainer}>
            <ul className={styles.rotary}>
                {arr.map((id) => {
                    return <Card key={id}/>
                })}
            </ul>
            <div className={styles.controls}>

                <svg className={styles.btn} onClick={() => {

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

                <svg className={styles.btn} height="96" viewBox="0 0 24 24" width="96"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                    <path d="M0-.25h24v24H0z" fill="none"/>
                </svg>

            </div>
        </div>
    );
}