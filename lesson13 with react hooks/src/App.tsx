import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface user {
  id: number;
  username: string;
}
// for the fibonacci sequence
type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number =20 ;

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current) 
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])


  const addTwo = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
      setCount((prev) => prev + 2);
    },
    []
  );

  // useMemo is used to memoize a function
  const memoIzedFib = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className="app">
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Add 1</button>
        <button onClick={addTwo}>Add 2</button>
        <h2>{memoIzedFib}</h2>
        <input ref={inputRef} type="text" />
     
      </div>
    </div>
  );
};

export default App;
