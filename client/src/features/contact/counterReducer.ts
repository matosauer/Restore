export type CounterState = {
  data: number;
}

const initialState: CounterState = {
  data: 42
}

export function increment(ammount = 1) {
    return {
        type: 'increment',
        payload: ammount
    }
}

export function decrement(ammount = 1) {
    return {
        type: 'decrement',
        payload: ammount
    }
}

export default function counterReducer(state = initialState, action: { type: string, payload: number }) {   
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                data: state.data + action.payload
            }

        case 'decrement':
            return {
                ...state,
                data: state.data - action.payload
            }

        default:
            return state;
    }
}