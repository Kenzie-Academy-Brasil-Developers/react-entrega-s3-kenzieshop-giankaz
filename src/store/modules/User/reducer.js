export const userReducer = (state = JSON.parse(window.localStorage.getItem('@PetStore/user')) || 1, action) => {
    switch (action.type) {
        case 'ADD_USER': 
            return state = action.user
        default:
            return state
    }
}