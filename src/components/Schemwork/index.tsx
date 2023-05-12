import React from "react";
import { SchemworkListItem } from "./SchemworkListItem";
import styles from "./Schemwork.module.scss"

export const Schemwork = () => {
    return (
        <div className={styles.schemework}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.figure} ${styles.ellypse}`}>
                    <p className={styles.text}>Схема работы</p>
                </div>

                <div className={styles.text__block}>
                    <ul className={`${styles.list} ${styles.flex}`}>
                        <SchemworkListItem message={"Вы звоните нам или оставляете заявку"}/>
                        <SchemworkListItem message={"Бесплатный выезд и консультация замерщика"}/>
                        <SchemworkListItem message={"Расчет стоимости и согласования сроков"}/>
                        <SchemworkListItem message={"Выполнение работ"}/>
                        <SchemworkListItem message={"Сдача объекта"}/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}