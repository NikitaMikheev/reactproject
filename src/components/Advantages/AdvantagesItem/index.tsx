import React from "react";
import styles from "./AdvantagesItem.module.scss"

interface TProps {
    url: string,
    message: string
}

export const AdvantagesItem = (props: TProps) => {

    return (
    <div className={styles.item}>
        <img className={styles.pic} src={props.url} alt=""/>
        <div className={`${styles.bot__block} ${styles.flex}`}>
            <p className={styles.text}>{props.message}</p>
        </div>
    </div>
    )
}