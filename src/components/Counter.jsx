import React from 'react'
import {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const minusOne = () => setCount (count - 1)
    const reset = () => setCount (0)
    const plusOne = () => setCount (count + 1)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={minusOne}> - 1</button>
        <button onClick={reset}> reset</button>
        <button onClick={plusOne}> +1</button>
        
    </div>
  )
}

export default Counter