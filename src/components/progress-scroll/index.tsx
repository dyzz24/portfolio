
import styles from './style.module.scss';
import React, {useEffect, useRef} from "react";

let max_screen_main: number = 0;
let max_viewport: number = 0;

export const ProgressScroll: React.FC<{mainRef: React.MutableRefObject<HTMLDivElement | null>}> = ({mainRef}) => {

    const progressScrollRef = useRef<HTMLDivElement>(null);

    const  progressHandler = () =>  {
        if(!mainRef.current) return;
        const mainElement = mainRef.current;
        if (max_screen_main === 0 || max_viewport === 0) {

            max_screen_main = mainElement.getBoundingClientRect().height;
            max_viewport = document.documentElement.clientHeight;
        }

        const current_position = mainElement.getBoundingClientRect().top;

        const current_scroll_position = -current_position + max_viewport;

        if (-current_position <= 200) {
            requestAnimationFrame(() => {
                if(progressScrollRef.current) {
                    progressScrollRef.current.style.width = '0px';

                }
            })

        } else {
            const percent = (current_scroll_position * 100) / max_screen_main;

            requestAnimationFrame(() => {
                if(progressScrollRef.current) {
                    progressScrollRef.current.style.width = percent + "%";

                }
            })

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", progressHandler);
        return () => window.removeEventListener('scroll', progressHandler)
    }, [])

    return <div className={styles.progress_scroll} ref={progressScrollRef}/>
}