import React from "react";
import styles from './main.module.scss';
import {Header} from "./header";
import {AboutSection} from "./about-section";
import {Separator} from "./separator";
import {Works} from "./works";
import {ExperienceEducationSection} from "./experience-education-section";

export const MainPage = () => {
    return <div className={styles.content}>
        <Header/>
        <AboutSection/>
        <Separator text={'Последние работы'}/>
        <Works/>
        <Separator text={'Опыт работы / образование'}/>
        <ExperienceEducationSection/>
    </div>
}