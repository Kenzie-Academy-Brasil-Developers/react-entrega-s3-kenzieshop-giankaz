
export const loginReducer = (state = true, action) => {
console.log(`🤖 ~ loginReducer ~ action`, action)
    switch (action.type) {
        case "CHANGE_LOGIN" :
            return state = action.bool
        default:
            return state
    }
}