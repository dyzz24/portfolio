import React, { useContext } from 'react'
import {
    PreloaderStore,
    PreloaderStoreAction,
} from '../../store/preloader-store'

export const FRRImg: React.FC<IFRRImg> = ({
    src,
    style,
    useMap,
    className,
    callback,
    alt,
}) => {
    const { dispatch } = useContext(PreloaderStore)
    return (
        <img
            useMap={useMap}
            src={src}
            alt={alt}
            data-render={true}
            style={style}
            onLoad={() =>
                dispatch({
                    type: PreloaderStoreAction.SAFE_SRR_LOADED_RESOURCE,
                })
            }
            className={className}
            onClick={callback}
        />
    )
}

export interface IFRRImg {
    src: string
    style?: React.CSSProperties
    useMap?: string
    className?: string
    callback?: () => void
    alt?: string
}
