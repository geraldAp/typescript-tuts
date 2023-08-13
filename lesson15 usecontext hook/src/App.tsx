import Counter from "./Counter"
import { MyCounterContextProvider } from "./context/CounterContext"
import { initState } from "./context/CounterContext"

function App() {

  return (
    <>
    <MyCounterContextProvider count={initState.count} text={initState.text}>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </MyCounterContextProvider>
    </>
  )
}

export default App