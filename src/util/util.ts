type Action = string

export function applyTextAction(text: string, action: Action): string {
    if (!action) return text
    if (action.length > 1) {
        if (action === 'Backspace') {
            return text.slice(0, text.length - 1)
        } else if (action === 'WordDelete') {
            const words = text.split(' ').filter(word => word.length > 0)
            const newText = words.slice(0, words.length - 1).join(' ')

            return newText.length > 0 ? newText + ' ' : ''
        } else {
            return text
        }
    } else {
        return text + action
    }
}

export function callIfDefined(func, ...args) {
    if (func) return func(...args)
}

export function isHotkeyPressed(
    hotkey: string[],
    keys: Map<string, boolean>
): boolean {
    for (const key of hotkey) {
        if (!keys.get(key)) return false
    }

    return true
}

export function calculateWPM(chars: number, seconds: number): number {
    return (chars / seconds) * 12
}

export function getElapsedTime(timer: [number, number]): number {
    const elapsed = process.hrtime(timer)
    return elapsed[0] + elapsed[1] / 1000000000
}
