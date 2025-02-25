import React, { useRef } from 'react'
import './App.scss'
import './styles/_adaptive.scss'
import { Preloader } from './components/preloader'
import { ProgressScroll } from './components/progress-scroll'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page'
import { Routes as AppRouts } from './routes'
import { Footer } from './components/footer'
import { WorksPageSelector } from './pages/works-page-selector'
import { PreloaderProvider } from './store/preloader-store'
import { ScrollToTop } from './components/scroll-to-top'

function App() {
    const mainRef = useRef<HTMLDivElement | null>(null)

    return (
        <PreloaderProvider>
            <main ref={mainRef}>
                <ProgressScroll />
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path={AppRouts.MAIN} element={<MainPage />} />
                        <Route path={'/:id'} element={<WorksPageSelector />} />
                    </Routes>
                </BrowserRouter>
                <Preloader />
                <Footer />
            </main>
        </PreloaderProvider>
    )
}

export default App
