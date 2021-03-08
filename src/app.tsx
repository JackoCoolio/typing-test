import './app.scss'
import React, { Component } from 'react'
import { Game } from './components/game/game'

export class App extends Component {
    render() {
        return (
            <div id="app">
                <Game></Game>
            </div>
        )
    }
}
