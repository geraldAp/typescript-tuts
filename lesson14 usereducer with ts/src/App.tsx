import Counter from "./Counter"

const App = () => {
  return (
    <>
      <Counter>{(num:number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App
