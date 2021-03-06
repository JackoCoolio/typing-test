import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { configureStore } from './store'

import { App } from './app'

let root = document.createElement('div')

root.id = 'root'
document.body.append(root)

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
