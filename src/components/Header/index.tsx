import React, { useState } from "react";
import { Logotype } from "../Logo";
import { Time } from "./TimePic";
import { MainMenu } from "../MainMenu";
import { Button } from "../Button";
import styles from "./Header.module.scss"
import * as stylesBtn from "../Button/Button.module.scss"
import { useDocumentScrollThrottled } from "./docScroll";

export const Header = () => {
    
    const btn = {
        type: stylesBtn.default.primary,
        color: stylesBtn.default.orange
    };
    const [shouldHideHeader, setShouldHideHeader] = useState(false);

    const MINIMUM_SCROLL = 80;

    useDocumentScrollThrottled(callbackData => {
        const { currentScrollTop } = callbackData;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    
        setShouldHideHeader(isMinimumScrolled);
      });


    const hiddenBot= shouldHideHeader ? styles.hiddenBot : '';
    const hiddenTop= shouldHideHeader ? styles.hiddenTop : '';


    return <>
    <header className={`${styles.header}`}>
        <div className={`${styles.header__top} ${hiddenTop}`}>
            <div className={`${styles.container} ${styles.flex}`}>
                <Logotype />
                <MainMenu />
            </div>
        </div>

        <div className={`${styles.header__bot} ${hiddenBot}`}>
            <div className={`${styles.container} ${styles.flex}`}>
                <div className={`${styles.header__worktime} ${styles.flex}`}>
                   <Time />
                    <p className={`${styles.header__bot}, ${styles.flex}`}>Круглосуточно <br />Без выходных</p>
                </div>

                <div className="header__feedback">
                    <p className={styles.header__botText}>
                        Позвоните нам: <a className="phone" href="tel:+79960004574">+7 (996) 000-45-74</a>
                    </p>
                </div>

                <Button btn={btn}/>
            </div>
        </div>
    </header>
    </>
}