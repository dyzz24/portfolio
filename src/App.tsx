import React, {useRef} from 'react';
import './App.scss';
import {Preloader} from "./components/preloader";
import {ProgressScroll} from "./components/progress-scroll";
import {HashRouter, Switch, Route} from "react-router-dom";
import {MainPage} from "./pages/main-page";
import {Routes} from "./routes";
import {Footer} from "./components/footer";
import {WorksPageSelector} from "./pages/works-page-selector";


function App() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
      <main ref={mainRef}>
        <ProgressScroll mainRef={mainRef}/>
        <HashRouter>
            <Switch>
                <Route exact path={Routes.MAIN} component={MainPage}/>
                <Route  path={'/:id'} component={WorksPageSelector}/>


            </Switch>
        </HashRouter>
        <Preloader/>
        <Footer/>
      </main>
  );
}

export default App;
