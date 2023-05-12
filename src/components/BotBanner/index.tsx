import React from "react";
import image from "../../assets/action-pic.png";
import { Button } from "../Button";
import styles from "./BotBanner.module.scss";
import * as stylesBtn from "../Button/Button.module.scss";

export const BotBanner = () => {

    const btn = {
        type: stylesBtn.default.primary,
        color: stylesBtn.default.blue
    };

    return (
        <div className={styles.banner}>
           <div className={`${styles.container} ${styles.pos}`}>
               <img className={styles.pic} src={image} alt=""/>
               <div className={styles.btn}>
                <Button btn={btn}/>
               </div>
               {/* <a className="button primary-btn primary-btn--blue action-banner__btn modal--open" href="#!">Оставить заявку</a> */}
           </div>
       </div>
    )
} 