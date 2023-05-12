import React from "react";
import { Logotype } from "../Logo";
import { MainMenu } from "../MainMenu";
import { Icons } from "./Icons";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={`${styles.top__part} ${styles.flex}`}>
                    <Logotype/>
                    <MainMenu />
                </div>

                <div className={styles.bot__part}>
                    <div className={styles.flex}>
                        <div className="footer__politics">
                            <p className={styles.text}>
                                &#169; 2008-2023 Все права защищены
                            </p>
                            <a className={styles.link} href="404.html">Политика конфидециальности</a>
                        </div>

                        <div className="footer__feedback">
                            <p className={styles.number}>
                                <a className="phone" href="tel:+79960004574">+7 (996) 000 - 45 - 74</a>
                            </p>
                        </div>

                        <div className={`${styles.icons} ${styles.flex}`}>
                           <Icons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}