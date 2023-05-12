import React from "react";
import styles from "./MainMenu.module.scss"

export const MainMenu = () => {
    return (
        <nav className={styles.mainMenu}>
            <ul className={`${styles.mainMenu} ${styles.flex}`}>
                <li className="mainMenu__item main-menu__item--active"><a href="#!">Главная</a></li>
                <li className="mainMenu__item"><a href="about.html">О&nbsp;нас</a></li>
                <li className="mainMenu__item"><a href="our_works.html">Наши&nbsp;работы</a></li>
                <li className="mainMenu__item"><a href="faq.html">Вопрос&nbsp;-&nbsp;Ответ</a></li>
            </ul>
        </nav>
    );
}