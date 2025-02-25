import './style.module.scss'
import styles from './style.module.scss'
import React, { useContext } from 'react'
import { PreloaderStore } from '../../store/preloader-store'

export const Preloader = () => {
    const { state } = useContext(PreloaderStore)

    if (state.FRRLoadedImgQuantityLeft <= 0) return null

    return (
        <div className={styles.loader}>
            <p className={styles.preloader_title}>Загрузка</p>
            <div className={styles.l_main}>
                <div className={styles.l_square}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.l_square}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.l_square}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.l_square}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
