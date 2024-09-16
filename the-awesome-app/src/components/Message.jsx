function Message(props){

    console.log("Message props", props);

    return (
        <div>
            <h4 style={{color: props.color}} >Hello {props.text}</h4>
            <p>This is a react functional component</p>
            <p>Generated at {new Date().toLocaleString()}</p>
            {/* <p> {5 + 6} </p> */}
        </div>
    )
}

export default Message;