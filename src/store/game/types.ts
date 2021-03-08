export interface GameState {
    userInput: string
    timer: [number, number]
    inProgress: boolean
}

export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT'
export const RESTART_TEST = 'RESTART_TEST'
export const START_TEST = 'START_TIMER'
export const FINISH_TEST = 'FINISH_TEST'

interface UpdateUserInputAction {
    type: typeof UPDATE_USER_INPUT
    payload: string
}

interface RestartTestAction {
    type: typeof RESTART_TEST
}

interface StartTestAction {
    type: typeof START_TEST
}

interface FinishTestAction {
    type: typeof FINISH_TEST
}

export type GameActionType =
    | UpdateUserInputAction
    | RestartTestAction
    | StartTestAction
    | FinishTestAction
