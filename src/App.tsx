import React from 'react';
import { Header } from './components/Header';
import { MainBanner } from './components/MainBanner';
import styles from './App.module.scss'

function App() {
  return (
    <div className="App">
    <Header></Header>

    <div className={styles.main}>
      <MainBanner></MainBanner>
    </div>

    </div>
  );
}

export default App;