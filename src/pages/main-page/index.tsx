import React, { useContext, useRef } from 'react'
import styles from './main.module.scss'
import { Header } from './header'
import { AboutSection } from './about-section'
import { Separator } from './separator'
import { Works } from './works'
import { ExperienceEducationSection } from './experience-education-section'
import { Skills } from './skills'
import { Menu } from '../../components/menu'
import { PreloaderStore } from '../../store/preloader-store'
import { usePreloader } from '../../hooks/use-preloading'

export const MainPage = () => {
    const { dispatch } = useContext(PreloaderStore)
    usePreloader(dispatch)

    const menuProps = {
        aboutRef: useRef<HTMLDivElement | null>(null),
        experienceRef: useRef<HTMLDivElement | null>(null),
        headerRef: useRef<HTMLDivElement | null>(null),
        skillsRef: useRef<HTMLDivElement | null>(null),
        worksRef: useRef<HTMLDivElement | null>(null),
    }

    return (
        <div className={styles.content}>
            <Menu {...menuProps} />
            <Header refElement={menuProps.headerRef} />
            <AboutSection refElement={menuProps.aboutRef} />
            <Separator text={'Last works'} />
            <Works refElement={menuProps.worksRef} />
            <Separator text={'Опыт работы / образование'} />
            <ExperienceEducationSection refElement={menuProps.experienceRef} />
            <Separator text={'Навыки'} />
            <Skills refElement={menuProps.skillsRef} />
        </div>
    )
}

export interface IWithRefChildren {
    refElement: React.RefObject<HTMLDivElement | null>
}
