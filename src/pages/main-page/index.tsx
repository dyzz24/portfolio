import React, {useContext, useEffect, useRef} from "react";
import styles from './main.module.scss';
import {Header} from "./header";
import {AboutSection} from "./about-section";
import {Separator} from "./separator";
import {Works} from "./works";
import {ExperienceEducationSection} from "./experience-education-section";
import {Skills} from "./skills";
import {Menu} from "../../components/menu";
import {PreloaderStore, PreloaderStoreAction} from "../../store/preloader-store";
import {usePreloader} from "../../hooks/use-preloading";

export const MainPage = () => {
    const {dispatch} = useContext(PreloaderStore);
    usePreloader(dispatch);

    const menuProps = {
        aboutRef: useRef<HTMLDivElement>(null),
        experienceRef: useRef<HTMLDivElement>(null),
        headerRef: useRef<HTMLDivElement>(null),
        skillsRef: useRef<HTMLDivElement>(null),
        worksRef: useRef<HTMLDivElement>(null)
    }

    return <div className={styles.content}>
        <Menu {...menuProps}/>
        <Header refElement={menuProps.headerRef}/>
        <AboutSection refElement={menuProps.aboutRef}/>
        <Separator text={'Последние работы'}/>
        <Works refElement={menuProps.worksRef}/>
        <Separator text={'Опыт работы / образование'}/>
        <ExperienceEducationSection refElement={menuProps.experienceRef}/>
        <Separator text={'Навыки'}/>
        <Skills refElement={menuProps.skillsRef}/>
    </div>
}

export interface IWithRefChildren {
    refElement:  React.RefObject<HTMLDivElement>;
}