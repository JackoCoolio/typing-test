export type Mode = 'words' | 'quote'
export type QuoteLength = 'short' | 'medium' | 'long'

interface WordsSettings {
    numWords: number
}

interface QuoteSettings {
    length: QuoteLength
}

export interface GameSettings {
    words: WordsSettings
    quote: QuoteSettings
}

export interface GameState {
    userInput: string
    timer: [number, number]
    inProgress: boolean
    mode: Mode
    settings: GameSettings
}

export const SET_MODE = 'SET_MODE'
export const SET_QUOTE_LENGTH = 'SET_QUOTE_LENGTH'
export const SET_NUMBER_OF_WORDS = 'SET_NUMBER_OF_WORDS'
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

interface SetModeAction {
    type: typeof SET_MODE
    payload: Mode
}

interface SetQuoteLengthAction {
    type: typeof SET_QUOTE_LENGTH
    payload: QuoteLength
}

interface SetNumberOfWordsAction {
    type: typeof SET_NUMBER_OF_WORDS
    payload: number
}

export type GameActionType =
    | UpdateUserInputAction
    | RestartTestAction
    | StartTestAction
    | FinishTestAction
    | SetModeAction
    | SetQuoteLengthAction
    | SetNumberOfWordsAction
