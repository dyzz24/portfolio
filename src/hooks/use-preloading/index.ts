import {IPreloadAction, PreloaderStoreAction} from "../../store/preloader-store";
import React, {useEffect} from "react";

let timeout = 0;
const MAX_PRELOADER_LIFE_TIME = 5000
export const usePreloader = (preloaderDispatch: React.Dispatch<IPreloadAction> ) => {

    useEffect(() => {

        preloaderDispatch({type: PreloaderStoreAction.SET_SAFE_SRR_LOADED_RESOURCE, payload:
                Array.from(document.querySelectorAll('img')).filter(img =>
                    img.hasAttribute('data-render')
                ).length +
                Array.from(document.querySelectorAll('div')).filter(div =>
                    div.hasAttribute('data-render')
                ).length})

        timeout = window.setTimeout(() => {
            preloaderDispatch({type: PreloaderStoreAction.SET_SAFE_SRR_LOADED_RESOURCE, payload: 0})
        }, MAX_PRELOADER_LIFE_TIME);


        return () => {
            clearTimeout(timeout);
        }

    }, [])
}