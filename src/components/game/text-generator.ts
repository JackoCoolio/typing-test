'use strict'

import commonWords from 'Assets/words.txt'

const words: string[] = commonWords.split('\n')

export function generateWords(num: number): string[] {
    if (num <= 0) {
        console.error('Number must be greater than 0!')
        return
    }

    let result = []
    for (let i = 0; i < num - 1; i++) {
        result.push(words[Math.floor(Math.random() * 200)])
    }

    result.push(words[Math.floor(Math.random() * 200)])

    return result
}
