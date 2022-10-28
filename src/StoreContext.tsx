import React from "react";
import {GeneralStoreType} from "./redux/state";

export const StoreContext = React.createContext({} as GeneralStoreType)

export type ProviderType = {
    store: GeneralStoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
