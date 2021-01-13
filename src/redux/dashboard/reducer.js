import dashboard from '../../containers/dashboard'
import { TOGGLE_SHOW_SIDEBAR } from './types'

const initialState = {
    showSideBar: true
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_SIDEBAR:
            return {
                ...state,
                showSideBar: !state.showSideBar
            }

        default:
            return state
    }
}

export default dashboardReducer