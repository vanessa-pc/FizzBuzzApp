import { fizzbuzz } from "../utils/fizzbuzz";
import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
  const [count, setCount] = useState<number>(2);
  const [sequence, setSequence] = useState<Array<string | number>>([1]);

  const handleClick = () => {
    setCount(count + 1);
    setSequence([...sequence, fizzbuzz(count)]);
  };

  return (
    <>
      <h1> A game of Fizz Buzz</h1>
      <p>Click on the button below to play!</p>
      <p>Sequence: {sequence.join(" ")}</p>
      <button onClick={handleClick}> Next</button>
    </>
  );
}
