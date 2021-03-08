import {
    UPDATE_USER_INPUT,
    RESTART_TEST,
    START_TEST,
    FINISH_TEST,
} from './types'

export function updateUserInput(action: string) {
    return {
        type: UPDATE_USER_INPUT,
        payload: action,
    }
}

export function restartTest() {
    return {
        type: RESTART_TEST,
    }
}

export function startTest() {
    return {
        type: START_TEST,
    }
}

export function finishTest() {
    return {
        type: FINISH_TEST,
    }
}
