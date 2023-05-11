import React from "react";

export const Advantages = () => {
    
    return (
        <section className="advantages">
           <div className="container">
               <h2 className="advantages__title title">Достоинства полусухой стяжки пола</h2>
               <div className="advantages-grid">
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/durability.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Надежность и долговечность</p>
                       </div>
                   </div>
   
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/cheap.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Невысокая стоимость</p>
                       </div>
                   </div>
   
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/test-pic.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Универсальная прочная основа</p>
                       </div>
                   </div>
   
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/warm.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Тепло- и шумоизоляция</p>
                       </div>
                   </div>
   
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/no-leaks.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Отсутствие протечек, трещин и проседаний</p>
                       </div>
                   </div>
   
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/quick-work.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Быстро делается и сохнет</p>
                       </div>
                   </div>
   
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/perfectly-smooth.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Идеально ровная безупречная поверхность</p>
                       </div>
                   </div>
   
                   <div className="advantages-grid__item">
                       <img className="advantages__pic" src="assets/images/ecological.png" alt="">
                       <div className="advantages-grid__bot-block d-flex-full-center">
                           <p className="advantages-grid__text">Экологически чисто и безопасно для здоровья</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    )
}