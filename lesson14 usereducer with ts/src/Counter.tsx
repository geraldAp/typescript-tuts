import { ChangeEvent, ReactNode, useReducer } from "react";

const initState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREAMENT,
  DECREAMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  Payload?: string;
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREAMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREAMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:

      return { ...state, text: action.Payload ?? ""  };// if it is null display the empty string

    default:
      throw new Error("Invalid action type");
  }
};

type Childrentype = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: Childrentype) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increament = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREAMENT });
  const decreament = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREAMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, Payload: e.target.value });
  };
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  );
};

export default Counter;
