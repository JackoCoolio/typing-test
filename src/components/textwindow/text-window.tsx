import React, { Component } from 'react'
import { applyTextAction } from 'Util/util'
import './text-window.scss'

export interface TextWindowState {
    targetString: string
    userInput: string
}

export class TextWindow<
    P = unknown,
    S extends TextWindowState = TextWindowState
> extends Component<P, S> {
    constructor(props: P) {
        super(props)

        this.state = {
            ...this.state,
            targetString: '',
            userInput: '',
        }
    }

    protected doAction(action: string): void {
        // prevent typing past the end of the target string
        if (
            action.length === 1 &&
            this.state.userInput.length === this.state.targetString.length
        )
            return
        this.setState({
            userInput: applyTextAction(this.state.userInput, action),
        })
    }

    render(): JSX.Element {
        const letters: JSX.Element[] = []
        for (let i = 0; i < this.state.targetString.length; i++) {
            const targetLetter = this.state.targetString[i]
            const userLetter = this.state.userInput[i]

            let state: string
            if (userLetter === undefined) {
                state = 'empty'
            } else if (userLetter === targetLetter) {
                state = 'correct'
            } else {
                state = 'incorrect'
            }

            let displayLetter: string
            if (state === 'incorrect' && targetLetter === ' ') {
                displayLetter = '_'
            } else {
                displayLetter = targetLetter
            }

            letters.push(
                <span
                    className={`${
                        i === this.state.userInput.length ? 'current' : ''
                    } letter ${state}`}
                    key={i}
                >
                    {displayLetter}
                </span>
            )
        }

        letters.push(
            <span
                className={`letter ${
                    this.state.userInput.length ===
                    this.state.targetString.length
                        ? 'current'
                        : ''
                }`}
                key={-1}
            >
                &nbsp;
            </span>
        )

        return <div className="text-window">{letters}</div>
    }
}
