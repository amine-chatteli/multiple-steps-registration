import { data } from './data';
import { NEXT_STEP, PREVIOUS_STEP, ENTER_DATA } from './types';
import { changeInputData } from "./helpers";

const initialState = {
    steps: data.steps,
    currentStep: 1,
}

const registrationPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        case PREVIOUS_STEP:
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        case ENTER_DATA:
            return changeInputData(state, action.payload)

        default:
            return state
    }
}

export default registrationPageReducer