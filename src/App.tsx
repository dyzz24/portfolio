import React, {useRef} from 'react';

import './App.scss';
import {Preloader} from "./components/preloader";
import {ProgressScroll} from "./components/progress-scroll";
import {Header} from "./components/header";

function App() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
      <main ref={mainRef}>
        <ProgressScroll mainRef={mainRef}/>
        <Header/>
    <Preloader/>
      </main>
  );
}

export default App;
