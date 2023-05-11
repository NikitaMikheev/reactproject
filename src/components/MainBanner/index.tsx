import React from "react";
import styles from "./MainBanner.module.scss"

export const MainBanner = () => {
    return (
        <div className="main-banner">
           <div className={`${styles.wrapper}`}>
               <div className={`${styles.container} ${styles.height} ${styles.text}`}>
                   <h1 className={`${styles.title}`}>Услуги механизированной полусухой стяжки <br />пола под ключ</h1>
                   <h3 className={`${styles.place}`}>в г. Нижний Новгород и по области</h3>
                   <p className={`${styles.slogan}`}>Ровнее, крепче, теплее</p>
               </div>
           </div>
       </div>
    )
}