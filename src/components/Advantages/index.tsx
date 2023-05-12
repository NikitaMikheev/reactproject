import React from "react";
import { AdvantagesItem } from "./AdvantagesItem";
import styles from "./Advantages.module.scss"
import { images } from "../../assets";

export const Advantages = () => {
    
    return (
        <section className={styles.advantages}>
           <div className={styles.container}>
               <h2 className={styles.title}>Достоинства полусухой стяжки пола</h2>
               <div className={styles.grid}>
                    <AdvantagesItem url={images.durability} message="Надежность и долговечность"/>
                    <AdvantagesItem url={images.cheap} message="Невысокая стоимость"/>
                    <AdvantagesItem url={images.testPic} message="Универсальная прочная основа"/>
                    <AdvantagesItem url={images.warm} message="Тепло- и шумоизоляция"/>
                    <AdvantagesItem url={images.noLeaks} message="Отсутствие протечек, трещин и проседаний"/>
                    <AdvantagesItem url={images.quickWork} message="Быстро делается и сохнет"/>
                    <AdvantagesItem url={images.perfectlySmooth} message="Идеально ровная безупречная поверхность"/>
                    <AdvantagesItem url={images.ecological} message="Экологически чисто и безопасно для здоровья"/>
               </div>
           </div>
       </section>
    )
}