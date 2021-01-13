import registrationPageReducer from './register/reducer';
import CurrentUserReducer from './current-user/reducer'
import dashboardReducer from './dashboard/reducer'

const { combineReducers } = require("redux")

const rootReducer = combineReducers({
    registrationPage: registrationPageReducer,
    currentUser: CurrentUserReducer,
    dashboard: dashboardReducer
});

export default rootReducer;