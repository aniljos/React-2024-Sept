// <Input type="text" label="Name" placeholder="Enter the name" value={name} onChange={e => setName(e.target.vaue)} ref={nameInputRef}/>

import React, { useImperativeHandle, useRef } from "react";


const Input =  React.forwardRef(function Input({type, label, placeholder, value, onChange, id}, ref){

    useImperativeHandle(ref, () => {

        //return an object(the ref will point to this object)
        return {
            name: "Input",
            desc: "This is a custom input",
            focus: () => {
                console.log("in Input focus");
                inputRef.current.focus();
            }
        }

    } )
    const inputRef = useRef(null);

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input ref={inputRef} className="form-control" id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
})

export default Input;