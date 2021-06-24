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


    const headerRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const worksRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const {dispatch} = useContext(PreloaderStore);
    usePreloader(dispatch);

    return <div className={styles.content}>
        <Menu aboutRef={aboutRef} experienceRef={experienceRef} headerRef={headerRef} skillsRef={skillsRef} worksRef={worksRef}/>
        <Header refElement={headerRef}/>
        <AboutSection refElement={aboutRef}/>
        <Separator text={'Последние работы'}/>
        <Works refElement={worksRef}/>
        <Separator text={'Опыт работы / образование'}/>
        <ExperienceEducationSection refElement={experienceRef}/>
        <Separator text={'Навыки'}/>
        <Skills refElement={skillsRef}/>
    </div>
}

export interface IWithRefChildren {
    refElement:  React.RefObject<HTMLDivElement>;
}