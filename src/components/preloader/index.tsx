import './style.module.scss'
import styles from './style.module.scss'
import React, { useContext } from 'react'
import { PreloaderStore } from '../../store/preloader-store'

export const Preloader = () => {
    const { state } = useContext(PreloaderStore)

    if (state.FRRLoadedImgQuantityLeft <= 0) return null

    return (
        <div className={styles.loader} aria-label="Loading">
            <p className={styles.preloader_title}>Loading</p>
            <div className={styles.l_main} role="status" aria-live="polite">
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
