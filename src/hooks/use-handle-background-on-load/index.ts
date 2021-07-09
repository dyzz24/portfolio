import {useEffect} from "react";


export const useHandleBackgroundOnLoad = (srcCollection: string[], dispatchCallback:  () => void) => {
    useEffect(() => {
        srcCollection.forEach(src => {
            const image = new Image();
            image.onload = () => dispatchCallback();
            image.src = src;
        })
    }, []);
}