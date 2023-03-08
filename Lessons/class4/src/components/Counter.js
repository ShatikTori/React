import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(1)
    return (
        <div>
            <p> You clicked {count}  times.</p>
            <button onClick={() => setCount(count+1)}>Click me, I increase</button>
            <button onClick={() => setCount(count-2)}>Click me, I decrease</button>
        </div>
    )
}

export default Counter