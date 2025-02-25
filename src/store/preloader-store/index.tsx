import React, { useReducer } from 'react';

const initState: IInitState = {
    FRRLoadedImgQuantityLeft: Number.MAX_SAFE_INTEGER,
    loadingStarted: false
};

export enum PreloaderStoreAction {

    SAFE_SRR_LOADED_RESOURCE = 'safeSRRLoadedResource',
    SET_SAFE_SRR_LOADED_RESOURCE = 'setSafeSRRLoadedResource'
}

const reducer = (state: IInitState, action: IPreloadAction): IInitState => {
    const { type, payload } = action;
    switch (type) {

        case PreloaderStoreAction.SAFE_SRR_LOADED_RESOURCE:
            return { ...state,  FRRLoadedImgQuantityLeft: state.FRRLoadedImgQuantityLeft - 1};
        case PreloaderStoreAction.SET_SAFE_SRR_LOADED_RESOURCE:
            return  {...state, FRRLoadedImgQuantityLeft: payload} as IInitState
        default:
            return state;
    }
};

export const PreloaderStore = React.createContext<IMetaStore>({
    state: initState,
    dispatch: () => null,
});
const { Provider } = PreloaderStore;

export const PreloaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

interface IInitState {
    FRRLoadedImgQuantityLeft: number;
    loadingStarted: boolean;
}

export interface IPreloadAction {
    type: PreloaderStoreAction;
    payload?: boolean | number
}


interface IMetaStore {
    state: IInitState;
    dispatch: React.Dispatch<IPreloadAction>;
}
