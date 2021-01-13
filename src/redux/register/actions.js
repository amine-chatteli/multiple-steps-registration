import { NEXT_STEP, PREVIOUS_STEP, ENTER_DATA } from './types'
import { saveToLocaLStorage, selectDataFromState } from './helpers'


export const nextStep = () => ({
    type: NEXT_STEP
})

export const previousStep = () => ({
    type: PREVIOUS_STEP
})

export const enterData = (e) => {
    const { value } = e.target

    return {
        type: ENTER_DATA,
        payload: value
    }
}

export const submit = () => {
    return (dispatch, getState) => {
        // grab current state
        const state = getState()
        let user = selectDataFromState(state.registrationPage)
        saveToLocaLStorage(user)
       
    }
}

