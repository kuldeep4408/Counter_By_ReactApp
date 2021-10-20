import React, { useState } from 'react'
import './counter.css';



const Counter = () => {
    
    const [count, setCount] = useState(0);
function inc(test){
    console.log(test)
    setCount(count+1);
}
function dec(){
    setCount(count-1);
}

    return (

        

        <div className='container'>
            <button onClick={inc }>+</button>
            <h1>{ count }</h1>
            <button onClick={ dec }>-</button>
        </div>
    )
}

export default Counter
