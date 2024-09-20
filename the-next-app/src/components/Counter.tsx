'use client'

import { useState } from "react";

function Counter(){

    const [counter, setCounter] = useState(5);


    return (
        <div>
            <h4>Counter: {counter}</h4>
            <button onClick={() => setCounter(p => p + 1)}>Inc</button>
        </div>
    )
}

export default Counter;