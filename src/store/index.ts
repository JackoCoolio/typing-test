import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { gameReducer } from './game/reducers'

const rootReducer = combineReducers({
    game: gameReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools())

    return store
}
