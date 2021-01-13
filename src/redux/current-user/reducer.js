import { SET_USER } from "./actions";
const initialState = {
    currentUser: {}
}

const CurrentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default CurrentUserReducer