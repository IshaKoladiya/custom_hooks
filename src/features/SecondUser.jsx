import React from 'react'
import useOnline from '../utils/useOnline'
import useCounter from '../utils/useCounter'
import useFatch from '../utils/useFatch'

const SecondUser = () => {
  const {increment , decrement , count} = useCounter(10)
  const [data] = useFatch('https://fakestoreapi.com/carts');


  return (
    <div>
      SecondUser - {useOnline() ? 'Online' : 'Offline'}
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        {data.map((data) => (
          <div key={data.id}>
            <h1>{data.id}</h1>
            <h2>{data.date}</h2>
            <p>{data.products.map((item)=>{
              return <span key={item.id}>{item.productId} - {item.quantity}</span>
            })}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecondUser
