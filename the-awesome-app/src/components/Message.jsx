import React, { useEffect } from "react";
import { withBorder } from "../hoc/withBorder";

function Message(props){

    console.log("Message props", props);

    // useEffect(callback, [list of dependencies]);
    useEffect(() => {
        console.log("useEffect on component mounted");

        return () => {
            console.log("useEffect on component unmounted");
        }
    }, []);

    return (
        <div>
            <h4 style={{color: props.color}} >Hello {props.text}</h4>
            <p>This is a react functional component</p>
            <p>Generated at {new Date().toLocaleString()}</p>
            {/* <p> {5 + 6} </p> */}
        </div>
    )
}

export default React.memo(withBorder(Message));