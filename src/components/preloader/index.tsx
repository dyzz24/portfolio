import './style.module.scss';
import styles from './style.module.scss';
import React, { useState} from "react";

export const Preloader = () => {
    const [isLoaded, setIsLoaded] = useState(true);

    if(isLoaded) return null;

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