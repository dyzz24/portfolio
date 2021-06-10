import './style.module.scss';
import styles from './style.module.scss';
import React from "react";

export const Preloader = () => {
    return <div className={styles.loader}>
        <p className={styles.preloader_title}>Загрузка</p>
        <div className={styles.l_main}>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
        </div>
    </div>
}