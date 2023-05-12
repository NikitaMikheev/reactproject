import React from 'react';
import { Header } from './components/Header';
import { MainBanner } from './components/MainBanner';
import { Advantages } from './components/Advantages';
import { Schemwork } from './components/Schemwork';
import { Calculator } from './components/Calculator';
import { BotBanner } from './components/BotBanner';
import styles from './App.module.scss'

function App() {
  return (
    <div className="App">
      <Header/>

      <div className={styles.main}>
        <MainBanner/>
        <Advantages/>
        <Schemwork/>
        <Calculator/>
        <BotBanner/>
      </div>

    </div>
  );
}

export default App;