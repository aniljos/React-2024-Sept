// <Counter initialvalue={5}/>

import { useEffect, useRef, useState } from "react";
import Message from "./Message";

function Counter(props){

    //let counter = props.initialvalue;
    const [counter, setCounter] = useState(props.initialvalue);
    const [temp, setTemp] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("useEffect on component update(counter)", counter);
    }, [counter])
  
    function inc(evt){
        //console.log("in inc", evt);
        setCounter(counter + 1);
        console.log("in inc", counter);
    }
    function decr(){
        setCounter(counter - 1);
    }
    function handleChange(evt){
        setCounter(Number(evt.target.value))
    }
    function updateCounter(){
        //setCounter(temp);

        setCounter(Number(inputRef.current.value));
        inputRef.current.value = 0;
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            <div>
                {/* Controlled inputs */}
                Counter: <input type="number" 
                        placeholder="Enter the counter" value={counter} onChange={handleChange}/>
            </div>
            <div>
                {/* Update Counter: <input type="number" placeholder="Enter a value" 
                                value={temp} onChange={(e) => {setTemp(Number(e.target.value))}}/>&nbsp; */}
                
                {/* Uncontrolled input */}
                Update Counter: <input ref={inputRef} type="number" placeholder="Enter a value" />&nbsp;
                <button onClick={updateCounter}>Update</button>
            </div>

                    {/*Conditional rendering  */}
            {counter > 10 ? <Message text="Counter"/> : null}
        </div>
    )
}
export default Counter;