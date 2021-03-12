import {
    UPDATE_USER_INPUT,
    RESTART_TEST,
    START_TEST,
    FINISH_TEST,
    SET_MODE,
    SET_NUMBER_OF_WORDS,
    SET_QUOTE_LENGTH,
    Mode,
    QuoteLength,
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

export function setMode(mode: Mode) {
    return {
        type: SET_MODE,
        payload: mode,
    }
}

export function setNumberOfWords(num: number) {
    return {
        type: SET_NUMBER_OF_WORDS,
        payload: num,
    }
}

export function setQuoteLength(length: QuoteLength) {
    return {
        type: SET_QUOTE_LENGTH,
        payload: length,
    }
}
