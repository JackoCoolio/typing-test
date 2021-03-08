import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'Store/index'
import { GameTextWindow } from './game-text-window'
import './game.scss'

interface Props {}

interface State {}

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
            </div>
        )
    }
}
