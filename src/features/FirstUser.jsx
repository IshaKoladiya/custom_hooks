import React from "react";
import useOnline from "../utils/useOnline";
import useCounter from "../utils/useCounter";
import useFatch from "../utils/useFatch";

const FirstUser = () => {
  const { increment, decrement, count } = useCounter(2);
  const [data] = useFatch('https://fakestoreapi.com/products');
  console.log(data)
  return (
    <div>
      FirstUser - {useOnline() ? "💚" : "💖"}
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        {data.map((data) => (
          <div key={data.id}>
            <h1>{data.id}</h1>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstUser;
