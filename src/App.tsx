import React from 'react';
import { Header } from './components/Header';
import { MainBanner } from './components/MainBanner';
import { Advantages } from './components/Advantages';
import { Schemwork } from './components/Schemwork';
import styles from './App.module.scss'

function App() {
  return (
    <div className="App">
      <Header/>

      <div className={styles.main}>
        <MainBanner/>
        <Advantages/>
        <Schemwork/>
      </div>

    </div>
  );
}

export default App;