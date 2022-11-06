export type SidebarType = {
    id: string
    name: string
}
export type SidebarAcType = ReturnType<typeof addAlertAC>
type SideBarInitialStateType = typeof initialState

let initialState = [
    {id: "1", name: "Misha"},
    {id: "3", name: "Piter"},
    {id: "4", name: "Olya"}
] as Array<SidebarType>

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