import {
    GameState,
    GameActionType,
    UPDATE_USER_INPUT,
    RESTART_TEST,
    START_TEST,
    FINISH_TEST,
} from './types'

import { applyTextAction } from 'Util/util'

const initialState: GameState = {
    userInput: '',
    timer: process.hrtime(),
    inProgress: false,
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
        default:
            return state
    }
}
