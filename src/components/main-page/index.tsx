import React from "react";
import styles from './main.module.scss';
import {Header} from "./header";
import {AboutSection} from "./about-section";
import {Separator} from "./separator";
import {Works} from "./works";

export const MainPage = () => {
    return <div className={styles.content}>
        <Header/>
        <AboutSection/>
        <Separator text={'Последние работы'}/>
        <Works/>
    </div>
}