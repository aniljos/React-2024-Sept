// <Counter initialvalue={5}/>

import { useState } from "react";

function Counter(props){

  
    //let counter = props.initialvalue;
    const [counter, setCounter] = useState(props.initialvalue);
  
    function inc(evt){
        console.log("in inc", evt);
        setCounter(counter + 1);
        //console.log("in inc", counter);
    }
    function decr(){
        setCounter(counter - 1);
    }
    function handleChange(evt){
        setCounter(Number(evt.target.value))
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            <div>
                Counter: <input type="number" 
                        placeholder="Enter the counter" value={counter} onChange={handleChange}/>
            </div>
        </div>
    )
}
export default Counter;