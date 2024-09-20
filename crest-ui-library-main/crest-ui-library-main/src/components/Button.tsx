import react from 'react';

function Button(props: any){
    return (
        <div>
            <button {...props}>{props.text}</button>
        </div>
        
    )
}

export default Button;