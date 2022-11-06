export type SideType = { id: string, name: string }
export type SideBarInitialStateType = {
    friend: Array<SideType>
}
export type SidebarAcType = ReturnType<typeof addAlertAC>

let initialState = {
    friend: [
        {id: "1", name: "Misha"},
        {id: "3", name: "Piter"},
        {id: "4", name: "Olya"}
    ]
}

export const sidebarReducer = (state: SideBarInitialStateType = initialState,
                               action: SidebarAcType): SideBarInitialStateType => {

    switch (action.type) {
        case ADD_ALERT:
            let stateCopy = {...state}
            return stateCopy
        default:
            return state
    }
};

export const addAlertAC = () => {
    return {type: ADD_ALERT} as const
}

const ADD_ALERT = "ADD-ALERT"