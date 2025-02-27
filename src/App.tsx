import React from 'react'
import './App.scss'
import './styles/_adaptive.scss'
import { ProgressScroll } from './components/progress-scroll'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page'
import { Routes as AppRouts } from './routes'
import { Footer } from './components/footer'
import { WorksPageSelector } from './pages/works-page-selector'
import { ScrollToTop } from './components/scroll-to-top'

function App() {
    return (
        <main>
            <ProgressScroll />
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route path={AppRouts.MAIN} element={<MainPage />} />
                    <Route path={'/:id'} element={<WorksPageSelector />} />
                </Routes>
            </HashRouter>
            <Footer />
        </main>
    )
}

export default App
