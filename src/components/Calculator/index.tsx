import React from "react";
import styles from "./Calculator.module.scss"

export const Calculator = () => {
    return (
        <div className={styles.calculator}>
           <div className={styles.wrapper}>
               <div className={styles.container} id="width">
                   <h2 className={styles.title}>Рассчитать стоимость услуги</h2>
                   <div className={`${styles.flex} ${styles.pos}`}>
                       <div className="calculator__options">
                           <form className="calculator__form">
                               <p className={styles.layer}>Слой покрытия: <select name="Слой" className={styles.selector} id="options">
                                       <option value="70" selected>70мм и меньше</option>
                                       <option value="80">80мм</option>
                                       <option value="90">90мм</option>
                                   </select></p>
                           </form>
                           <p className={styles.sqr}>Площадь в м²:</p>
                           <div className={styles.slider}>
                               <div className={styles.slider__pos}>
                                   <output htmlFor={styles.range} className="metres" id="fader">30</output>
                                   <input className={styles.range} id="volu" type="range" min="30" max="350" value="30" step="1"/>
                               </div>
                           </div>
                       </div>
                       <div className={styles.result}>
                           <p className={styles.cost__text}>Примерная стоимость: </p>
                           <label className="calculator__cost-lable">
                               <input className={styles.cost} id="result" type="text" value="18000" disabled />
                           </label>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}