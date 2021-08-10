import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div className="counter">
            <div style={{fontSize: '20px', marginBottom: '10px'}}>Likes: {count}</div>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;