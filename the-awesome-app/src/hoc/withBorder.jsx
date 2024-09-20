

// HOC is a function that receives a component
// HOC should return a component(functional or class)


export function withBorder(Component){

    return function withBorderComponent(props){

        return (
            <div style={{border: '2px solid blue', margin: '5px', padding: '5px'}}>
                <Component {...props}/>
            </div>
        )
    }

}