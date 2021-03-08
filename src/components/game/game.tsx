import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'Store/index'
import { GameTextWindow } from './game-text-window'
import './game.scss'
import { updateUserInput, restartTest } from 'Store/game/actions'
import { GameState } from 'Store/game/types'

interface Props {}

interface State {
    timer: [number, number]
    wpm: number
}

export class Game extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            timer: undefined,
            wpm: 0,
        }
    }

    render(): JSX.Element {
        return (
            <div id="game">
                <GameTextWindow />
                <div id="stats-display">
                    {this.state.wpm}
                    <br />
                </div>
            </div>
        )
    }
}
