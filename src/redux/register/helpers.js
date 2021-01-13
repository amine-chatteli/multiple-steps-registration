import { data } from './data'

export const changeInputData = (state, value) => {
    const { currentStep, steps } = state;
    steps[currentStep - 1].input.value = value
    switch (currentStep) {
        case 1:
            steps[currentStep - 1].input.error = nameValidation(value) ? '' : 'first name must be valid'
            break;
        case 2:
            steps[currentStep - 1].input.error = nameValidation(value) ? '' : 'last name must be valid'
            break;
        case 3:
            steps[currentStep - 1].input.error = passwordValidation(value) ? '' : 'password must be at least 6 characters long'
            break;
        case 4:
            steps[currentStep - 1].input.error = emailValidation(value) ? '' : 'email must be valid'
            break;
        default:
            break;
    }
    return {
        ...state,
        steps
    }
}

const nameValidation = (name) => {
    const isName = /^[a-z ,.'-]+$/i;
    return isName.test(name);
};

const emailValidation = (email) => {
    const isEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+(?:[a-z0-9-]*[a-z0-9])?/;
    return isEmail.test(email);
};

const passwordValidation = (password) => {
    return password.length >= 6
}


export const saveToLocaLStorage = (user) => {
    localStorage.setItem('user',JSON.stringify(user));
}

export const selectDataFromState = (state) => {
    let userDataFromState = {}
    for (let i = 0; i < state.steps.length; i++) {
        let { input: { name, value } } = state.steps[i]
        userDataFromState[name] = value
    }
    return userDataFromState
}

selectDataFromState(data)