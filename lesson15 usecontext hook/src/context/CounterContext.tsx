import React, {createContext,ReactElement, useContext, useReducer, useCallback} from "react";



type StateType = {
    count: number;
    text: string; 
}

export const initState: StateType = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
    }
}

// custom hook
const useCounterContext = (initState: StateType) => {
    const [state, dispatch] = useReducer(reducer, initState)


    const increment =useCallback( () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),[])

    const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),[])

    const handleTextInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        })
    },[])

    return {state, increment, decrement, handleTextInput}
}

// so if useCounterContext is a function u can use it like this and if its values change it wouldn't affect the type neg
// you can use it like this {}
type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState : UseCounterContextType = {
    state: initState,
    increment: () => {},
    decrement: () => {},
    handleTextInput: (e: React.ChangeEvent<HTMLInputElement>) =>{}
}
// giving a value to the context ts crazy merhnnn
export const CounterContext = createContext<UseCounterContextType>(initContextState)

type ChildrenType ={
children?: ReactElement |  undefined
}

export const MyCounterContextProvider = ({ children, ...initState }: ChildrenType & StateType) : ReactElement => {

return(
    <CounterContext.Provider value={useCounterContext(initState)}>
        {children}
    </CounterContext.Provider>

)
}

type UseCounterHookType = {
    count: number ,
    increment: () => void,
    decrement: () => void,
}

// hook for count
export const useCounter = (): UseCounterHookType => {
const {state: {count}, increment, decrement} = useContext(CounterContext)
return {count, increment, decrement}

}

// hook type for text
type UseCounterTextHookType = {
    text: string,
    handleTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}
//hook for text
export const useCounterText = (): UseCounterTextHookType => {
const {state: {text}, handleTextInput} = useContext(CounterContext)
return {text, handleTextInput}
}