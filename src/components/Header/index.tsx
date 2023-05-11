import React from "react";
import { Logotype } from "./Logo";
import { Time } from "./TimePic";
import { MainMenu } from "./MainMenu";
import { Button } from "../Button";
import styles from "./Header.module.scss"
import * as stylesBtn from "../Button/Button.module.scss"

export const Header = () => {
    
    const btn = {
        type: stylesBtn.default.primary,
        color: stylesBtn.default.orange
    };
    
    return <>
    <header className={styles.header}>
        <div className={styles.header__top}>
            <div className={`${styles.container} ${styles.flex}`}>
                <Logotype />
                <MainMenu />
            </div>
        </div>

        <div className={styles.header__bot}>
            <div className={`${styles.container} ${styles.flex}`}>
                <div className={`${styles.header__worktime} ${styles.flex}`}>
                   <Time />
                    <p className={`${styles.header__bot}, ${styles.flex}`}>Круглосуточно <br />Без выходных</p>
                </div>

                <div className="header__feedback">
                    <p className={styles.header_}>
                        Позвоните нам: <a className="phone" href="tel:+79960004574"><br />+7 (996) 000-45-74</a>
                    </p>
                </div>

                <Button btn={btn}/>
            </div>
        </div>
    </header>
    </>
}