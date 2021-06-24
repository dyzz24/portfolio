import {useEffect} from "react";


export const useHandleBackgroundOnLoad = (src: string, dispatchCallback:  () => void) => {
    useEffect(() => {
        const image = new Image();
        image.onload = () => dispatchCallback();
        image.src = src;
    }, []);
}