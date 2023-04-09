import React, { useReducer } from 'react'

type CounterState = {
    count: number
}

// type CounterAction = {
//     type: string,
//     payload?: number
// }

type ResetAction = {
    type: 'reset',
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type CounterAction = UpdateAction | ResetAction
// called discriminated unions - recommended

const initialState = {
    count: 0
}

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
            case 'reset':
                return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>+</button>
            <button>{state.count}</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>0</button>
        </>
    )
}

export default Counter