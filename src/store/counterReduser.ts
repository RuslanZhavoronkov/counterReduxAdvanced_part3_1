

type increaseCounterACType = ReturnType<typeof increaseCounterAC>
type getSettingACType = ReturnType<typeof getSettingAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>
type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>
type changeStartValueACType = ReturnType<typeof changeStartValueAC>
type getFirstMessageACType = ReturnType<typeof getFirstMessageAC>
type getWarningMessageACType = ReturnType<typeof getWarningMessageAC>
type setCounterZeroACType = ReturnType<typeof setCounterZeroAC>
type setEmptyMessageACType = ReturnType<typeof setEmptyMessageAC>

type ActionType = increaseCounterACType
    | getSettingACType
    | resetCounterACType
    | changeMaxValueACType
    | changeStartValueACType
    | getFirstMessageACType
    | getWarningMessageACType
    | setCounterZeroACType
    | setEmptyMessageACType


type initialStateType = {
    counter: number
    maxValue: number
    startValue: number
    message: string
    setting: boolean
    firstMessage: string
    warningMessage: string
}

const initialState: initialStateType = { 
    counter: 0, 
    maxValue: 0, 
    startValue: 0,
    message: '',
    setting: false,
    firstMessage: "Enter values and press 'set'",
    warningMessage: 'Incorrect value!'
 }

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {

        case "ICREASE-COUNTER": {
            return { ...state, counter: state.counter + 1 }
        }

        case "GET-SHOW-SETTING": {
            return { ...state, setting: !state.setting }
        }

        case "RESET-COUNTER": {
            return { ...state, counter: state.startValue }
        }

        case "CHANGE-MAX-VALUE": {
            return { ...state, maxValue: action.payload.maxValue }
        }

        case "CHANGE-START-VALUE": {
            return { ...state, startValue: action.payload.startValue }
        }

        case "GET-FIRST-MESSAGE": {
            return { ...state, message: state.firstMessage }
        }

        case "GET-WARNING-MESSAGE": {
            return { ...state, message: state.warningMessage }
        }

        case "SET-COUNTER-ZERO": {
            return { ...state, counter: 0 }
        }

        case "SET-EMPTY-MESSAGE": {
            return {...state, message: ''}
        }

        default:
            return state
    }
}


export const increaseCounterAC = () => {
    return {
        type: 'ICREASE-COUNTER'
    } as const
}

export const getSettingAC = () => {
    return {
        type: 'GET-SHOW-SETTING'
    } as const
}

export const resetCounterAC = () => {
    return {
        type: 'RESET-COUNTER'
    } as const
}

export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            maxValue
        }
    } as const
}

export const changeStartValueAC = (startValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        payload: {
            startValue
        }
    } as const
}

export const getFirstMessageAC = () => {
    return {
        type: 'GET-FIRST-MESSAGE'
    } as const
}

export const getWarningMessageAC = () => {
    return {
        type: 'GET-WARNING-MESSAGE'
    } as const
}

export const setCounterZeroAC = () => {
    return {
        type: 'SET-COUNTER-ZERO'
    } as const
}

export const setEmptyMessageAC = () => {
    return {
        type: 'SET-EMPTY-MESSAGE'
    } as const
}