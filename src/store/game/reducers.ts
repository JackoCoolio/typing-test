import {
    GameState,
    GameActionType,
    UPDATE_USER_INPUT,
    RESTART_TEST,
    START_TEST,
    FINISH_TEST,
    SET_MODE,
    SET_NUMBER_OF_WORDS,
    SET_QUOTE_LENGTH,
} from './types'

import { applyTextAction } from 'Util/util'

const initialState: GameState = {
    userInput: '',
    timer: process.hrtime(),
    inProgress: false,
    mode: 'words',
    settings: {
        quote: {
            length: 'medium',
        },
        words: {
            numWords: 30,
        },
    },
}

export function gameReducer(
    state = initialState,
    action: GameActionType
): GameState {
    switch (action.type) {
        case UPDATE_USER_INPUT:
            return {
                ...state,
                userInput: applyTextAction(state.userInput, action.payload),
            }
        case RESTART_TEST:
            return {
                ...state,
                inProgress: false,
                userInput: '',
            }
        case START_TEST:
            return {
                ...state,
                inProgress: true,
                timer: process.hrtime(),
            }
        case FINISH_TEST:
            return {
                ...state,
                inProgress: false,
            }
        case SET_MODE:
            return {
                ...state,
                mode: action.payload,
            }
        case SET_NUMBER_OF_WORDS:
            var modifiedState = { ...state }

            state.settings.words.numWords = action.payload

            return modifiedState
        case SET_QUOTE_LENGTH:
            var modifiedState = { ...state }

            state.settings.quote.length = action.payload

            return modifiedState
        default:
            return state
    }
}
