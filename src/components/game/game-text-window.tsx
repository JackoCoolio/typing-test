import { remote } from 'electron'
import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'Store'
import {
    restartTest,
    startTest,
    updateUserInput,
    finishTest,
} from 'Store/game/actions'
import { GameState } from 'Store/game/types'
import { calculateWPM, getElapsedTime, isHotkeyPressed } from 'Util/util'
import { TextWindow, TextWindowState } from '../textwindow/text-window'
import { generateWords } from './text-generator'

interface GameTextWindowState extends TextWindowState {
    keys: Map<string, boolean>
    elapsedTime: number
}

interface GameTextWindowProps {
    game: GameState
    updateUserInput: typeof updateUserInput
    restartTest: typeof restartTest
    startTest: typeof startTest
    finishTest: typeof finishTest
}

const restartHotkey = ['Shift', 'Enter']

class GameTextWindowComponent extends TextWindow<
    GameTextWindowProps,
    GameTextWindowState
> {
    constructor(props: GameTextWindowProps) {
        super(props)

        this.state = {
            ...this.state,
            targetString: generateWords(10).join(' '),
            keys: new Map<string, boolean>(),
            elapsedTime: 0,
        }
    }

    restart() {
        this.setState({
            userInput: '',
            targetString: generateWords(10).join(' '),
        })

        this.props.restartTest()
    }

    componentDidMount() {
        const win = remote.BrowserWindow.getAllWindows()[0]

        setInterval(() => {
            if (this.props.game.inProgress)
                this.setState({
                    elapsedTime: getElapsedTime(this.props.game.timer),
                })
        }, 100)

        win.webContents.on('before-input-event', (event, input) => {
            if (input.type === 'keyDown') {
                let action = input.key

                if (input.key === 'Backspace') {
                    if (this.state.keys.get('Control')) {
                        action = 'WordDelete'
                    }
                } else if (input.key.length > 1) {
                    this.state.keys.set(input.key, true)

                    // check for restart hotkey
                    if (isHotkeyPressed(restartHotkey, this.state.keys)) {
                        this.restart()
                    }

                    action = undefined
                }

                // apply the action
                if (action !== undefined) {
                    this.doAction(action)
                    this.props.updateUserInput(action)
                }

                if (
                    this.state.userInput.length > 0 &&
                    !this.props.game.inProgress
                ) {
                    this.props.startTest()
                }

                if (this.state.targetString === this.state.userInput) {
                    this.props.finishTest()
                    this.restart()
                }
            } else if (input.type === 'keyUp') {
                if (input.key !== 'Backspace' && input.key.length > 1) {
                    this.state.keys.set(input.key, false)
                }
            }
        })
    }

    render() {
        const wpm = calculateWPM(
            this.props.game.userInput.length,
            getElapsedTime(this.props.game.timer)
        )
        return (
            <>
                {super.render()}
                <div id="live-stats">
                    {wpm.toFixed(0)}wpm : {this.state.elapsedTime.toFixed(0)}s
                </div>
            </>
        )
    }
}

// connect to Redux store
export const GameTextWindow = connect(
    (state: RootState) => {
        return {
            game: state.game,
        }
    },
    {
        updateUserInput,
        restartTest,
        startTest,
        finishTest,
    }
)(GameTextWindowComponent)
