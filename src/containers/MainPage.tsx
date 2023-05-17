import React from "react";
import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";
import { Advantages } from "../components/Advantages";
import { Schemwork } from "../components/Schemwork";
import { Calculator } from "../components/Calculator";
import { BotBanner } from "../components/BotBanner";
import { Footer } from "../components/Footer";
import styles from "./MainPage.module.scss"

export const MainPage = () => {
    return (
    <>
        <Header/>
    <div className={styles.main}>
        <MainBanner/>
        <Advantages/>
        <Schemwork/>
        <Calculator/>
        <BotBanner/>
        <Footer/>
    </div>
    </>
    )
}