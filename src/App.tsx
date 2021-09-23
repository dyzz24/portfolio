import React, { useRef} from 'react';
import './App.scss';
import './styles/_adaptive.scss';
import {Preloader} from "./components/preloader";
import {ProgressScroll} from "./components/progress-scroll";
import {HashRouter, Switch, Route} from "react-router-dom";
import {MainPage} from "./pages/main-page";
import {Routes} from "./routes";
import {Footer} from "./components/footer";
import {WorksPageSelector} from "./pages/works-page-selector";
import {PreloaderProvider} from "./store/preloader-store";
import {ScrollToTop} from "./components/scroll-to-top";


function App() {
  const mainRef = useRef<HTMLDivElement | null>(null);



  return (
      <PreloaderProvider>
      <main ref={mainRef}>

        <ProgressScroll mainRef={mainRef}/>
        <HashRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path={Routes.MAIN} component={MainPage}/>
                <Route  path={'/:id'} component={WorksPageSelector}/>

            </Switch>
        </HashRouter>
        <Preloader/>
        <Footer/>
      </main>
      </PreloaderProvider>
  );
}

export default App;
