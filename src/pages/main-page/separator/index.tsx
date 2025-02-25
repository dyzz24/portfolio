import React, {useContext} from "react";
import {PreloaderStore, PreloaderStoreAction} from "../../../store/preloader-store";
import {useHandleBackgroundOnLoad} from "../../../hooks/use-handle-background-on-load";
import sepBg from '../../../img/separator.png';

export const Separator: React.FC<{text: string}> = ({text}) => {
    const {dispatch} = useContext(PreloaderStore);
    useHandleBackgroundOnLoad([sepBg], () => dispatch({type: PreloaderStoreAction.SAFE_SRR_LOADED_RESOURCE}))

    return <div className="separator" data-render={true}>
        <h2>{text}</h2>
    </div>
}