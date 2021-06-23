import React, {useRef} from 'react';
import './App.scss';
import {Preloader} from "./components/preloader";
import {ProgressScroll} from "./components/progress-scroll";
import {HashRouter, Switch, Route} from "react-router-dom";
import {MainPage} from "./components/main-page";
import {Routes} from "./routes";
import {Footer} from "./components/footer";


function App() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
      <main ref={mainRef}>
        <ProgressScroll mainRef={mainRef}/>
        <HashRouter>
            <Switch>
                <Route exact path={Routes.MAIN} component={MainPage}/>
            </Switch>
        </HashRouter>
        <Preloader/>
        <Footer/>
      </main>
  );
}

export default App;
