export const loginReducer = (state = (!!window.localStorage.getItem('@PetStore/user')) || false, action) => {
    switch (action.type) {
        case "CHANGE_LOGIN":
            return state = action.bool
        default:
            return state
    }
}

export const headerInfo = (state = true, action) => {
    switch (action.type) {
        case "HEADER_CHANGE":
            return state = action.bool
        default:
            return state
    }
}