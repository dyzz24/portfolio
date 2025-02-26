import React from 'react'
import './App.scss'
import './styles/_adaptive.scss'
import { ProgressScroll } from './components/progress-scroll'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page'
import { Routes as AppRouts } from './routes'
import { Footer } from './components/footer'
import { WorksPageSelector } from './pages/works-page-selector'
import { ScrollToTop } from './components/scroll-to-top'

function App() {
    return (
        <main>
            <ProgressScroll />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path={AppRouts.MAIN} element={<MainPage />} />
                    <Route path={'/:id'} element={<WorksPageSelector />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </main>
    )
}

export default App
